/*
* @Author: getgitch95
* @Date:   2019-08-08 14:45:23
* @Last Modified by:   getgitch95
* @Last Modified time: 2019-08-08 14:56:57
*/
const fs = require('fs')
//指定项目名称，创建前端项目的目录结构

function mkp(){
//1.获取名称
const pathName = "./"+process.argv[2]
//2.根据名称生成文件夹
fs.mkdirSunc(pathname)
fs.mkdirSunc(pathname+"/css")
fs.mkdirSunc(pathname+"/js")
fs.mkdirSunc(pathname+"images")
}

module.exports = mkp