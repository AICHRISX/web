/*
* @Author: getgitch95
* @Date:   2019-08-11 20:28:02
* @Last Modified by:   getgitch95
* @Last Modified time: 2019-08-11 21:17:43
*/
const fs = require('fs')
const util = require('util')
//1.同步
/*
//1.1逐步操作
//
//1.1.1打开文件
const fd = fs.openSync('./01.txt','w')
console.log(fd)
//1.1.1写入文件
fs.writeSync(fd,'hello')
//1.1.3关闭文件
fs.closeSync(fd)
*/



//1.2合并操作
// fs.writeFilesync('./01.txt','hello',{flag:'a'})

// console.log('do something after write file...')

//2.异步
//2.1逐步操作
//2.1.1打开文件
/*
fs.open('./01.txt','w',(err,fd)=>{
	if(err){
		console.log('open file err:',err)
	}else{
		//2.1.2写入文件
		//console.log(fd)
		fs.write(fd,'hello',(err)=>{
			if(err){
				console.log('write file err:',err)
			}else{
				console.log('write file success')
			}
			//2.1.3关闭文件
			fs.close(fd,err=>{
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
// 2.2合并操作
fs.writeFile('./01.txt','hello',{flag:'w'},err=>{
	if(err){
		console.log('write file error:',err)
	}else{
		console.log('write file success')
	}
})


console.log('do something after write file...')
*/
//3.promise处理异步

const writeFile = util.promisify(fs.writeFile)


writeFile('./01.txt','hello',{flag:'a'})
.then(data=>{
	console.log('write file success')
})
.catch(err=>{
	console.log('write file error:',err)
})




