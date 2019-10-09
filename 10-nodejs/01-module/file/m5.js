/*
* @Author: getgitch95
* @Date:   2019-08-07 19:58:29
* @Last Modified by:   getgitch95
* @Last Modified time: 2019-08-07 20:42:19
*/
//定义模块
console.log('in m5...')
const str = 'hello'

const fn = ()=>{
	console.log('fn...')
}

const obj = {
	name:'chris',
	age:23
}

/*
console.log(exports)
console.log(module.exports)
console.log(module.exports == exports)
*/

/*
exports.str = str
exports.fn = fn
exports.obj = obj
*/
/*
module.exports.str = str
module.exports.fn = fn
module.exports.obj = obj
*/
/*
exports = {
	str,
	fn,
	obj
}
*/
/*
exports = {
	str,
	fn,
	obj
}
*/

module.exports = {
	str,
	fn,
	obj
}

// exports.str = str
// module.exports = {
// 	fn,
// 	obj
// }







