/*
* @Author: getgitch95
* @Date:   2019-08-11 10:51:48
* @Last Modified by:   getgitch95
* @Last Modified time: 2019-08-11 19:44:08
*/
const { Writable } = require('stream')




class CustomWriter extends Writable{
	_write(chunk,encoding,callback){
		console.log('chunk::',chunk.toString())
		console.log('encoding::',encoding)
		callback && callback()
	}
}

const writer = new CustomWriter()


writer.on('finish',()=>{
	console.log('write done...')
})

writer.write('hello','',()=>{
	console.log('after write hello')
})

writer.write('good')

writer.end('yes')