/*
* @Author: getgitch95
* @Date:   2019-08-13 12:54:49
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-18 12:43:13
*/
const crypto = require('crypto')
const hmac = crypto.createHmac('sha356','yuiop67890')


//添加需要加密的明文
hash.update('123456')

//输出密文
console.log(hmac.digest('hex'))