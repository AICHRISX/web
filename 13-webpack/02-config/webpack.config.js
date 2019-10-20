/*
* @Author: Chris
* @Date:   2019-10-20 21:00:11
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-20 22:15:19
*/
const path = require('path')
module.exports = {
	//指定环境
	mode:'development',
	// mode:'production',
	//单一入口
	// entry:'./src/index.js',
	// entry:{main:'./src/index.js'},
	//多入口
	entry:{
		index:'./src/index.js',
		about:'./src/about.js',
		contact:'./src/contact.js'
	},
	//出口
	output: {
		//「入口分块(entry chunk)」的文件名模版
		// filename:'[name]-[chunkhash]-bundle.js',
		filename:'[name]-[hash]-bundle.js',
		//所有输出文件的目标路径
		path:path.resolve(__dirname,'dist')
	},
	module: {
		rules: [
		//处理css文件
			{
				test:/\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
		//处理图片
			{
				test:/\.(png|jpg|gif)$/i,
				use: [
					{
						loader:'url-loader',
						options: {
							limit: 400
						}
					}
				]
			}
		]
	}
}