/*
* @Author: Chris
* @Date:   2019-10-22 21:25:21
 * @Last Modified by: Chris:)
 * @Last Modified time: 2019-12-18 16:57:16
*/
import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import store from './store'

import App from './App.js'

ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById('root'))
// 热加载
if(module.hot){
    module.hot.accept();
}