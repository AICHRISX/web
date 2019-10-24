/*
* @Author: Chris
* @Date:   2019-10-24 14:33:06
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-24 14:39:49
*/
import React,{ Component } from 'react'
class Item extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<li>{this.props.task}</li>
		)
	}
}
export default Item