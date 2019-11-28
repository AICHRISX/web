/*
* @Author: Chris
* @Date:   2019-10-24 14:33:06
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-24 15:18:15
*/
import React,{ Component } from 'react'
class Item extends Component{
	constructor(props){
		super(props)
	}
	render(){
		const { handleDel,task } = this.props
		return(
			<li onClick={handleDel}>{task}</li>
		)
	}
}
export default Item
//在父组件当中传递一个能够操纵父组件的函数，在子组件当中执行函数