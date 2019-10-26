/*
* @Author: Chris
* @Date:   2019-10-23 09:40:06
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-26 11:41:23
*/
import React, { Component } from 'react'
import store from './store'
import {
    getChangeItemAction,
    getAddItemAction,
    getDelItemAction,
    getLoadInitDataAction
    getRequestInitDataAction
} from './store/actionCreator.js'


import AppUI from './AppUI.js'

//容器组件
class App extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleDel = this.handleDel.bind(this)

        this.state = store.getState()
        store.subscribe(() => { this.setState(store.getState()) })
    }
    componentDidMount(){
        //发送ajax请求
        store.dispatch(getRequestInitDataAction())
    }
    handleAdd() {
        store.dispatch(getAddItemAction())
    }
    handleChange(ev) {
        const task = ev.target.value
       store.dispatch(getChangeItemAction(task))
    }
    handleDel(index) {
       store.dispatch(getDelItemAction(index))
    }
    render() {
        return (
            <AppUI 
                task={this.state.task}
                list={this.state.list}
                handleChange={this.handleChange}
                handleDel={this.handleDel}
                handleAdd={this.handleAdd}
            />
        )
    }
}

export default App