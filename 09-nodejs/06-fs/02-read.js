/*
* @Author: getgitch95
* @Date:   2019-08-12 08:53:36
* @Last Modified by:   getgitch95
* @Last Modified time: 2019-08-12 11:01:02
*/
const fs = require('fs')
const util = require('util')

//1.同步
//
//1.1逐步操作
//
//1.1.1打开文件
/*
const fd = fs.openSync('./01.txt','r')
//1.1.2读出文件内容
const buf = Buffer.alloc(100)
fs.readSync(fd,buf,0,1,0)
console.log(buf.toString())
//1.1.3关闭文件
fs.closeSync(fd) 

//1.2合并操作
const data = fs.readFileSync('./01.txt',{encoding:'utf8'})
console.log(data)
*/

//2.2异步
/*
//2.3逐步操作

//2.4打开文件
fs.open('./01.txt','r',(err,fd)=>{
	if(err){
		console.log('open file err:',err)
	}else{
		//2.5读出文件内容
		const buf =Buffer.alloce(100)
		fs.read(fd,buf,0,20,0(err)=>{
			if(err){
				console.log('read file err:',err)
			}else{
				console.log(buf)
			}
				//2.6关闭文件
				fs.close(fd.err=>{
					if(err){
						console.log('close file error:',err)
					}else{
						console.log('close file success')
					}	
					
				})
		})
	}
})
*/






/*
//3.合并操作
fs.readFile('./01.txt',{flag:'r',encoding:'utf8'},(err,data)=>{
	if(err){
		console.log('read file err:',err)
	}else{
		console.log(data)
	}
})
*/

//3.1promise处理异步
const readFile = util.promisify(fs.readFile)

readFile('./01.txt'.{flag:'r',encoding:'utf8'})
.then(data=>{
	console.log(data)
})
.catch(err=>{
	console.log('read file err:',err)
})


