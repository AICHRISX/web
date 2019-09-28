/*
* @Author: getgitch95
* @Date:   2019-08-08 18:02:46
* @Last Modified by:   getgitch95
* @Last Modified time: 2019-08-08 20:01:37
*/
const EventEmitter = require('events')
class CustomEmitter extends EventEmitter{

}
const emitter = new CustomEmitter()

//1.用on
// emitter.on('test',()=>{
// 	console.log('execute test fn1...')
// })
// emitter.emit('test')



//2.用 addListener
// emitter.addListener('test',()=>{
// 	console.log('execute test fn2...')
// })

// emitter.emit('test')
// emitter.emit('test')
// emitter.emit('test')

//3.用once
// emitter.once('test',()=>{
// 	console.log('execute test fn3...')
// })
// emitter.emit('test')
// emitter.emit('test')
// 
// 
// console.log(emitter.on == emitter.addListener)//true

emitter.setMaxListeners(9)
emitter.on('test',()=>{
	console.log('execute test fn1...')
})


emitter.on('test',()=>{
	console.log('execute test fn2...')
})

emitter.on('test',()=>{
	console.log('execute test fn3...')
})

emitter.on('test',()=>{
	console.log('execute test fn4...')
})

emitter.on('test',()=>{
	console.log('execute test fn5...')
})

emitter.on('test',()=>{
	console.log('execute test fn6...')
})

emitter.on('test',()=>{
	console.log('execute test fn7...')
})

emitter.on('test',()=>{
	console.log('execute test fn8...')
})


emitter.on('test',()=>{
	console.log('execute test fn9...')
})
emitter.emit('test')


// 
// 
// 