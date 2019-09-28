/*
* @Author: getgitch95
* @Date:   2019-08-13 12:54:49
* @Last Modified by:   getgitch95
* @Last Modified time: 2019-08-13 12:59:37
*/
const crypto = require('crypto')
const hmac = crypto.createHmac('sha356','yuiop67890')
//md5 加密算法->不可逆
//const hash = crypto.createHash('md5')
//const hash = crypto.createHash('sha123')
//const hash = crypto.createHash('323')


//添加需要加密的明文
hash.update('123456')

//输出密文
console.log(hash.digest('hex'))