/*
* @Author: getgitch95
* @Date:   2019-08-08 20:03:09
* @Last Modified by:   getgitch95
* @Last Modified time: 2019-08-08 20:07:27
*/
const EventEmitter = require('events')

class CustomEmitter extends EventEmitter{

}
const emitter = new CustomEmitter()

emitter.on('test',(arg1,arg2)=>{
	console.log('get args1:',arg1)
	console.log('get args2:',arg2)
})
// emitter.emit('test','aa','bb')
const args = ['bb','cc']
emitter.emit('test',...args)