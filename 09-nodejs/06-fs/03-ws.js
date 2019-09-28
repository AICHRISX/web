/*
* @Author: getgitch95
* @Date:   2019-08-12 11:06:07
* @Last Modified by:   getgitch95
* @Last Modified time: 2019-08-12 11:29:35
*/
const fs = require('fs')
const rs = fs.createReadStream('./rs.txt')

ws.on('open',()=>{
	console.log('write stream open...')
})
ws.on('close',()=>{
	console.log('write stream close...')

})
ws.on('finish',()=>{
	console.log('write data end')

})
ws.write('hi')
ws.write('ver')
ws.end()