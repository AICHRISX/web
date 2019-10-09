/*
* @Author: getgitch95
* @Date:   2019-08-08 15:38:07
* @Last Modified by:   getgitch95
* @Last Modified time: 2019-08-08 15:47:14
*/
/*
const t1 = setTimeout(()=>{
	console.log('execute t1...')
},100)

// console.log(t1)
clearTimeout(t1)
console.log('after t1...')
*/
/*
const t2 = setInterval(()=>{
	console.log('execute t2...')
},100)
clearInterval(t2)
console.log('after t2...')
*/
/*
const t3 = setTimeout(()=>{
	console.log('execute t3...')
},0)

console.log('after t3...')
*/
/*
const t3 = setTimeout(()=>{
	console.log('execute t3...')
},0)

const t4 = setImmediate(()=>{
	console.log('execute t4...')
})
console.log('after t4...')
*/
const t4 = setImmediate(()=>{
	console.log('execute t4...')
})
process.nextTick(()=>{
	console.log('execute nextTick...')
})
console.log('after t4...')