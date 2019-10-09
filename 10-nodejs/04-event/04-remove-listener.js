/*
* @Author: getgitch95
* @Date:   2019-08-08 20:09:26
* @Last Modified by:   getgitch95
* @Last Modified time: 2019-08-08 20:17:45
*/
const EventEmitter = require('events')

class CustomEmitter extends EventEmitter{

}
const emitter = new CustomEmitter()

const listener = ()=>{
	console.log('execute test fn1...')
}

emitter.on('test',listener)

// console.log(emitter.removeListener == emitter.off)//true

// emitter.removeListener('test',listener)
emitter.off('test',listener)

emitter.emit('test')