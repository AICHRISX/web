/*
 * @Author: Chris
 * @Date:   2019-10-13 12:01:01
 * @Last Modified by:   Chris
 * @Last Modified time: 2019-10-13 14:12:07
 */
const mongoose = require('mongoose')

const getRandom = (min,max)=>{
	return Math.round(min + (max-min)*Math.random())
}
const names = ["Chris","justin","Jack","Oliver","luke","Admn","piter"]
const majors = ["Art","Musicman","Sport","Computer","English"]

const getName = ()=>names[getRandom(0,names.length-1)]
const getMajor = ()=>majors[getRandom(0,majors.length-1)]







//1.连接数据库
mongoose.connect('mongodb://localhost/AI', { useNewUrlParser: true })
//获取db对象
const db = mongoose.connection
//链接数据库失败
db.on('error', () => {
    console.log('connection db error:')
    throw 'connection db error'
})

db.once('open', () => {
    //1.定义Schema
    const UserSchema = new mongoose.Schema({
        name: String,
        age: Number,
        major: String
    })
    //2.根据Schema定义数据模型
    //2.1 model方法第一个参数指定集合名称，mongoose会默认转换为复数
    //2.2 model方法第二个参数指定Schema
    const UserModel = mongoose.model('User', UserSchema);

    //3.使用模型(CRUD)
    //3.1 新增
    
    const user = new UserModel({name:"jan",age:26,major:"AI"})
    /*
    user.save((err,doc)=>{
    	if(err){
    		console.log('save user error:',err)
    	}else{
    		console.log(doc)
    	}
    })
    */
    /*
user.save()
.then(doc => {
	console.log(doc)
})
.catch(err =>{
	console.log('save user error:',err)
})
*/
/*
UserModel.insertMany(
[
	{name:"jenson",age:22,major:"Art"},
	{name:"luke",age:67,major:"Moves"}
],(err,docs)=>{
	if(err){
		console.log('insertMany err:',err)
	}else{
		console.log(docs)
	}
})
*/
/*
UserModel.insertMany({name:"ella",age:23,major:"Art"},(err,docs)=>{
	if(err){
		console.log('insertMany err:',err)
	}else{
		console.log(docs)
	}
})
*/
/*
UserModel.insertMany(
[
	{name:"jenson",age:22,major:"Art"},
	{name:"luke",age:67,major:"Moves"}
])
.then(docs=>{
	console.log(docs)
})
.catch(err=>{
	console.log('insertMany err:',err)
})
*/
/*
UserModel.create(
[
	{name:"jenson",age:2,major:"Art"},
	{name:"luke",age:7,major:"Moves"}
],(err,docs)=>{
	if(err){
		console.log('insertMany err:',err)
	}else{
		console.log(docs)
	}
})
*/
	const arr = []
	for(let i = 0;i<100;i++){
		arr.push({
			name:getName(),
			age:getRandom(10,150),
			major:getMajor(),
		})
	}
UserModel.insertMany(arr)
.then(docs=>{
	console.log(docs)
})
.catch(err=>{
	console.log('insertMany err:',err)
})





})