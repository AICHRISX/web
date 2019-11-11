/*
* @Author: Chris
* @Date:   2019-10-15 16:35:44
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-15 18:12:25
*/
const express = require('express')
const swig = require('swig')

const app = express()


app.use(express.static('public'))


//开发阶段设置不走缓存
swig.setDefaults({
	// cache: 'memory'
	cache:false
})
//配置应用模版
//第一个参数是模版名称，同时也是模版文件的扩展名
//第二个参数是解析模版的方法
app.engine('html',swig.renderFile)
//配置模版的存放目录
//第一个参数必须是views
//第二个参数是模版存放的目录
app.set('views','./views')

//注册模版引擎
//第一个参数必须是view engine
//第二个参数是模版名称，也就是app.engine的第一个参数
app.set('view engine','html')

app.get("/",(req,res)=>{
	res.render("index")
})
app.get("/list",(req,res)=>{
	res.render("list")
})
app.get('/base',(req,res)=>{
	//第一个参数是相对于模版目录的文件
	//第二个参数是传递给模版的数据
	res.render('base',{
		title:"跨猪网",
		name:"ben",
		obj:{
			name:"Lv"
		},
		arr:["Rock","luck","admn","vincent"]
	})	
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))