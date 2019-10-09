/*
* @Author: getgitch95
* @Date:   2019-08-12 11:39:57
* @Last Modified by:   getgitch95
* @Last Modified time: 2019-08-12 11:52:30
*/
const fs = require('fs')
const rs = fs.createReadStream('./a.mov')
const ws = createWriteStream('./b.mov')
/*
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
*/