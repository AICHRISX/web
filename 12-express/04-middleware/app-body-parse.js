/*
* @Author: Chris
* @Date:   2019-10-15 15:55:35
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-15 16:28:42
*/

const querystring = require('querystring')

const express = require('express')
const bodyParser = require('body-parser')




const app = express()


app.use(express.static('public'))


//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
//parse application/json
app.use(bodyParser.json())

app.get('/',(req,res)=>{res.send('get response data')})
app.post('/',(req,res)=>{
	// console.log(req.query)
	// console.log(req.params)
	/*
	let body = ''
	req.on('end',(chunk)=>{
		console.log(querystring.parse(body))
	})

	req.on('data',(chunk)=>{
		body += chunk
	})
	*/
	console.log(req.body)
	
	res.json({
		code:0
	})
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))