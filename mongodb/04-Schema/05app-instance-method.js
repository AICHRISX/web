/*
* @Author: Chris
* @Date:   2019-10-13 15:34:16
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-14 15:05:48
*/
/*
* @Author: Chris
* @Date:   2019-10-13 12:01:01
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-13 15:20:01
*/
const mongoose = require('mongoose')

const UserModel = require('./models/user.js')
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
	//构建测试数据
	//构建用户
	/*
	UserModel.insertMany({
		name:"Tom",
		age:'88',
		major:"Computer",
		phone:'13241243121'
	})
	.then(docs=>{
		console.log('insert users:',docs)
	})
	.catch(err=>{
		console.log('insert users err:',err.message)
	})
	*/
	/*
	BlogModel.insertMany([{
		title:"blog1",
		content:"blog1 content",
		author:"5da417fce1c7f213228aaad7"
	},{
		title:"blog2",
		content:"blog2 content",
		author:"5da417fce1c7f213228aaad7"
	}])
	.then(docs=>{
		console.log('insert blogs:',docs)
	})
	.catch(err=>{
		console.log('insert blogs err:',err.message)
	})
	*/
	//根据姓名找到第一个用户的所有文章
	/*
	UserModel.findOne({name:"Tom"},(err,user)=>{
		if(err){
			console.log('find user err:',err)
		}else{
			// console.log(user)
			BlogModel.find({author:user._id},(err,blogs)=>{
				if(err){
					console.log('find blogs err:',err)
				}else{
					console.log(blogs)
				}
			})
		}
	})
	*/
	UserModel.findOne({name:"Tom"},(err,user)=>{
		if(err){
			console.log('find user err:',err)
		}else{
			user.findBlogs((err,blogs)=>{
				if(err){
					console.log('find blogs err:',err)
				}else{
					console.log(blogs)
				}
			})
		}
	})






	})









