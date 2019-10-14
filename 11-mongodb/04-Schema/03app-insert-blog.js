/*
* @Author: Chris
* @Date:   2019-10-13 15:34:16
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-13 16:23:36
*/
/*
* @Author: Chris
* @Date:   2019-10-13 12:01:01
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-13 15:20:01
*/
const mongoose = require('mongoose')

const BlogModel = require('./models/blog.js')

//1.连接数据库
mongoose.connect('mongodb://localhost/AI',{useNewUrlParser: true})
//获取db对象
const db = mongoose.connection
//连接数据库失败
db.on('error',(err)=>{
	console.log('connection db error:',err)
	throw err
})

db.once('open',()=>{
	console.log('connection db success')


	BlogModel.insertMany({
			title:"best blog",
			content:'this is a best blog',
			Author:"5da2c042c7d1e814add3b124"
		})
		.then(docs=>{
			console.log('insert blog:',docs)
		})
		.catch(err=>{
			console.log('insert blog err:',err.message)
		})







	
})