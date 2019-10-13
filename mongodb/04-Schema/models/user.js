/*
* @Author: Chris
* @Date:   2019-10-13 15:27:52
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-13 16:56:32
*/
/*
* @Author: Chris
* @Date:   2019-10-13 15:15:38
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-13 15:23:56
*/
const mongoose = require('mongoose')

//1.定义Schema
const UserSchema = new mongoose.Schema({
	name: {
		type:String,
		required:[true,"姓名必须输入"],
		minlength:[3,"用户名最小长度为3个字符"],
		maxlength:[3,"用户名最小长度为8个字符"]
	},
	age:{
		type:Number,
		min:[10,"年龄最小值为10"],
		max:[150,"年龄最大值为150"]
	},
	major:{
		type:String,
		enum:["Musicman","Computer"]
	},
	phone:{
		type:String
	},
	isLocked:{
		type:Boolean
	},
	createdAt:{
		type:Date,
		default:Date.now,
	},
	friends:{
		type:Array
	}
})

//2.根据Schema定义数据模型
//2.1 model方法第一个参数指定集合名称，mongoose会默认转换为复数
//2.2 model方法第二个参数指定Schema
const UserModel = mongoose.model('User',UserSchema);


module.exports = UserModel

