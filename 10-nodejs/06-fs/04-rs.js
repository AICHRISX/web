/*
* @Author: getgitch95
* @Date:   2019-08-12 11:30:32
* @Last Modified by:   getgitch95
* @Last Modified time: 2019-08-12 11:34:42
*/
const fs = require('fs')
const rs = fs.createReadStream('./rs.txt')

rs.on('open',()=>{
	console.log('write stream open...')
})
rs.on('close',()=>{
	console.log('write stream close...')

})
rs.on('end',()=>{
	console.log('read stream end')
})
rs.on('data',(chunk)=>{
	console.log('chunk:',chunk)

})