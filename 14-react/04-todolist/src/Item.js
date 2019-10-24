/*
* @Author: Chris
* @Date:   2019-10-24 14:33:06
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-24 15:01:34
*/
import React,{ Component } from 'react'
class Item extends Component{
	constructor(props){
		super(props)
	}
	/*
	handleDel(index){
		console.log('index',index)
		console.log(this.props.list)
		this.props.list.splice(index,1)
	}
	*/
	render(){
		return(
			//<li onClick={this.handleDel.bind(this,this.props.index)}>{this.props.task}</li>
			<li onClick={this.props.handleDel}>{this.props.task}</li>
		)
	}
}
export default Item
//在父组件当中传递一个能够操纵父组件的函数，在子组件当中执行函数