/*
* @Author: getgitch95
* @Date:   2019-08-08 15:58:13
* @Last Modified by:   getgitch95
* @Last Modified time: 2019-08-08 17:37:07
*/
//buffer 是一个存放二进制数据的容器（类似于数组）

const buf1 = Buffer.from('z')
console.log(buf1)//Buffer 7a
//一个英文字母 = 2 个16 进制数
/*
	1个0或者1 = 1bit（位）
	8bit = 1B(字节) = 2 个 16 进制数

	1021b = 1kb
	1024k = 1m
	1024m = 1g
	1024g = 1t 
 */

const buf2 = Buffer.from('hoolwood')
console.log(buf2)//<Buffer e5 a6 bd>
//一个汉字 = 3b
const buf3 = Buffer.alloc(10)
console.log(buf3)//<Buffer 00 00 00 00 00 00 00 00 00 00>
buf3[0] = 11//十进制数
console.log(buf3)//<Buffer 0b 00 00 00 00 00 00 00 00 00> 

buf3[1] = 0xab//十六进制
console.log(buf3)

buf3[9] = 0xfa
console.log(buf3)//<Buffer 0a sd 00 00 00 00 00 00 00 00>

buf[10] = 12
console.log(buf3)
//e7 a9 bp
const buf4 = Buffer.alloc(3)
buf4[0] = 0xa5
buf4[1] = 0xb5
buf4[2] = 0xcd
console.log(buf4.toString())

