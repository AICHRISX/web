/*
* @Author: Chris
* @Date:   2019-10-24 14:33:06
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-24 15:44:31
*/
import React,{ Component } from 'react'
import PropTypes from 'prop-types'
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

Item.propTypes = {
	handleDel:PropTypes.func,
	task:PropTypes.string.isRequired
}
Item.defaultProps = {
	task:'learn...'
}















export default Item
//在父组件当中传递一个能够操纵父组件的函数，在子组件当中执行函数