/*
* @Author: Chris
* @Date:   2019-10-01 11:41:18
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-02 13:18:26
*/
/*
	可以响应并返回文件
	处理GET请求+POST请求
*/
var http = require('http');
var fs   = require('fs');
var url = require('url');

var server = http.createServer(function(req,res){
	var urlStr = req.url;
	var parm = url.parse(urlStr,true).query;
	var obj = '{"name":"Chris","age":24}';
	res.end(parm.callback+'('+obj+')');
	
});
/*
局域网测试
server.listen(3000,'10.214.59.98',function(){
	console.log("Sever is running at http://10.214.59.98:3000");
})
*/
server.listen(3001,'127.0.0.1',function(){
	console.log("Sever is running at http://127.0.0.1:3001");
})