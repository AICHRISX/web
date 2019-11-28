/*
* @Author: Chris
* @Date:   2019-10-22 21:25:21
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-26 10:57:53
*/
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App.js'

ReactDOM.render(<App />,document.getElementById('root'))
//虚拟DOM测试
/*
function tick(){
	const elem = (
		<div>
			<h1>Hello</h1>
			<p>{new Date().toLocaleTimeString()}</p>
		</div>
		)
	ReactDOM.render(elem,document.getElementById('root'))
}
tick()
setInterval(tick,1000)
*/