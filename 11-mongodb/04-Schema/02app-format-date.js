/*
* @Author: Chris
* @Date:   2019-10-13 15:34:16
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-13 16:13:30
*/
/*
* @Author: Chris
* @Date:   2019-10-13 12:01:01
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-13 15:20:01
*/
const mongoose = require('mongoose')

const moment = require('moment')

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
	UserModel.findById('5da2c042c7d1e814add3b12b',(err,user)=>{
		if(err){
			console.log('find user err:',err)
		}else{
			// console.log(user)
			const date = new Date(user.createdAt)
			// console.log(date.getHours())
			// console.log(date.toLocaleString())
			console.log(moment(user.createdAt).format('YYYY-MM-DD HH:mm:ss'))
		}
	})







	
})