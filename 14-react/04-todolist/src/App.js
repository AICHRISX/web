/*
* @Author: Chris
* @Date:   2019-10-23 09:40:06
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-23 11:02:08
*/
import React,{ Component } from 'react'
import "./App.css"

class App extends Component{
	handleClick(){
		console.log(this)
		console.log('btn click...')
	}
	handleChange(ev){
		console.log(ev.target.value)
	}
	render(){
		return(
		<div className="App">		
			<input onChange={this.handleChange.bind(this)} />
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