/*
* @Author: getgitch95
* @Date:   2019-08-09 10:29:44
* @Last Modified by:   getgitch95
* @Last Modified time: 2019-08-09 18:01:50
*/
const path = require('path')
module.exports = {
	//指定环境
	mode:'development',
	//入口
	entry:'./src/index.js',
	//出口
	output: {
		//入口分块(entry chunk)的文件名模版
		filename:'bundle.js',
		//所有输出文件的目标路径
		path:path.resolve(__dirname,'dist')
	}
