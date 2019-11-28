/*
* @Author: Chris
* @Date:   2019-10-23 09:40:06
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-26 15:07:29
*/
import React, { Component } from 'react'
import './App.css'


import TodoList from './pages/todolist'

class App extends Component {
    render() {
        return (
            <div className="App">
                <TodoList />
            </div>
        )          
    }
}



export default App