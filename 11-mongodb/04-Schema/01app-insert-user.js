/*
* @Author: Chris
* @Date:   2019-10-13 15:34:16
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-13 20:37:52
*/
/*
* @Author: Chris
* @Date:   2019-10-13 12:01:01
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-13 15:20:01
*/
const mongoose = require('mongoose')

const UserModel = require('./models/user.js')

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

/*
	UserModel.insertMany({
		name:"Chris",
		age:24
	})
	.then(docs=>{
		console.log('insert users:',docs)
	})
	.catch(err=>{
		console.log('insert users err:',err)
	})
*/
/*
UserModel.insertMany({
		name:"Chris",
		age:'24'
	})
	.then(docs=>{
		console.log('insert users:',docs)
	})
	.catch(err=>{
		console.log('insert users err:',err.message)
	})
*/









	
})