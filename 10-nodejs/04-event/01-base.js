/*
* @Author: getgitch95
* @Date:   2019-08-08 17:41:13
* @Last Modified by:   getgitch95
* @Last Modified time: 2019-08-08 18:02:56
*/
const EventEmitter = require('events')
/*
const emitter = new EventEmitter()
//事件绑定
emitter.on('test',()=>{
	console.log('execute test fn...')
})
//事件绑定
emitter.emit('test')
*/
//console.log(EventEmitter)
class CustomEmitter extends EventEmitter{

}
const emitter = new CustomEmitter()
emitter.on('test',()=>{
	console.log('execute test fb...')
})
emitter.emit('test') 