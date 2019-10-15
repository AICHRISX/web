/*
* @Author: Chris
* @Date:   2019-10-15 15:55:35
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-15 16:08:04
*/
const express = require('express')
const app = express()


app.use(express.static('public'))

app.use((req,res,next)=>{
	console.log('do something for task A')
	// res.send('task A done')
	next()
})

app.use((req,res,next)=>{
	console.log('do something for task B')
	next()
})

app.get('/',(req,res)=>{res.send('get response data')})

app.listen(3000, () => console.log('Example app listening on port 3000!'))