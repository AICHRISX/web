const http = require('http')
const fs = require('fs')
const path = require('path')
const url = require('url')
const swig = require('swig')
const { get } = require('./Model/item.js')
const mime = require('./mime.json')
//每一次请求都会执行createServer方法中的函数
const server = http.createServer((req,res)=>{
	//路由：根据不同的请求作不同的处理
	console.log(req.method+"::"+req.url)
	const parsedUrl = url.parse(req.url,true)
	const pathname = parsedUrl.pathname
	//路由处理
	//首页路由 //index.html
	if(pathname == "/" || pathname =="/index.html"){
		//1.获取数据
		get()
		.then(data=>{
			//将数据分配到页面并返回页面
		const filePath = path.normalize(__dirname+"/static/index.html")
		//引入模版
		const template = swig.compileFile(filePath)
		const html = template({
			data:data
		})
		res.setHeader('Content-type',"text/html;charset=utf-8")
		res.end(html)
		})
		.catch(err=>{
			res.setHeader('Content-type',"text/html;charset=utf-8")
			res.statusCode = 404
			res.end('<h1>出错了</h1>')
		})
	}
	//添加路由
	else if(pathname == "/add"){
		console.log('add...')
		res.end(JSON.stringify({
			code:0
		}))
	}
	//静态资源的处理
	else{
	const filePath = path.normalize(__dirname+"/static"+req.url)
	//1.读取文件
	fs.readFile(filePath,(err,data)=>{
		//2.返回数据
		if(err){
			res.setHeader('content-type',"text/html;charset=UTF-8")
			res.end(data)
		}
	})	
	}

})