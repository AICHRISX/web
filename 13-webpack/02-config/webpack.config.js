/*
* @Author: Chris
* @Date:   2019-10-20 21:00:11
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-20 21:47:04
*/
const path = require('path')
module.exports = {
	//指定环境
	mode:'development',
	// mode:'production',
	//入口
	entry:'./src/index.js',
	//出口
	output: {
		//「入口分块(entry chunk)」的文件名模版
		filename:'bundle.js',
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