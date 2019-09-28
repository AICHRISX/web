/*
* @Author: getgitch95
* @Date:   2019-08-08 20:18:12
* @Last Modified by:   getgitch95
* @Last Modified time: 2019-08-08 20:22:23
*/
const EventEmitter = require('events')

class CustomEmitter extends EventEmitter{

}
const emitter = new CustomEmitter()

emitter.on('newListener',(eventName,cb)=>{
	console.log('execute newListener fn...')
	console.log('enventName:',enventName)
	cb()
})

// emitter.emit('newListener')
emitter.on('test1',()=>{
	console.log('execute test1 fn...')
})
emitter.on('test2',()=>{
	console.log('execute test2 fn...')
})
