/*
* @Author: Chris
* @Date:   2019-10-23 09:40:06
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-23 10:52:49
*/
import React,{ Component } from 'react'
import "./App.css"

class App extends Component{
	handleClick(){
		console.log(this)
		console.log('btn click...')
	}
	render(){
		return(
		<div className="App">		
			<input />
			<button onClick={this.handleClick.bind(this)}>提交</button>
			<ul>
				<li>吃饭</li>
				<li>睡觉</li>
				<li>敲代码</li>
			</ul>
		</div>
		)
	}
}
export default App