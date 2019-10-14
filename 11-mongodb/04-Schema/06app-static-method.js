/*
* @Author: Chris
* @Date:   2019-10-13 15:34:16
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-14 15:17:05
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
	//通过电话号码查找
	/*
	UserModel.findOne({phone:"13241243121"},(err,user)=>{
		if(err){
			console.log('find user err:',err)
		}else{
			console.log(user)
		}
	})
	*/
	UserModel.findByPhone("13241243121",(err,user)=>{
		if(err){
			console.log('find user err:',err)
		}else{
			console.log(user)
		}
	})





})









