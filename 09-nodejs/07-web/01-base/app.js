const http = require('http')
//每一次请求都会执行createServer方法中的函数
const server = http.createServer((req,res)=>{
	//req request可读流
	//res response可写流
	res.write('hello')
	res.end('good')
})

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running on http://127.0.0.1:3000')
})