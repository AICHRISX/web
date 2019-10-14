/*
* @Author: Chris
* @Date:   2019-10-14 16:59:52
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-14 18:24:26
*/
const express = require('express')
const app = express()


app.use(express.static('public'))


// app.use("/static",express.static('public'))


app.all("/",(req,res,next)=>{
	console.log('do something...')
	next()
})


app.get('/', (req, res,next) => {
	console.log('do something for get request...')
	next()
},(req,res)=>{
	res.send('get response data!')
})

app.post('/', (req, res) => res.send('post response data!'))
app.put('/', (req, res) => res.send('put response data!'))
app.delete('/', (req, res) => res.send('delete response data!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))