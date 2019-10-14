/*
* @Author: Chris
* @Date:   2019-10-14 16:59:52
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-14 21:31:02
*/
const express = require('express')
const app = express()


app.use(express.static('public'))


app.get('/',(req,res)=>{
	// res.send('get response data!')
	// res.send('<h1>get response data!</h1>')
	/*
	res.send({
		name:"Chris"
	})
	*/
	// es.end('get response data!')
	// res.end('<h1>get response data!</h1>')
	/*
	res.end({
		name:"Chris"
	})
	*/
	/*
	res.json({
		name:"Chris"
	})
	*/
	/*
	res.json('get response data!')
	*/
	res.json('<h1>get response data!</h1>')

})

app.listen(3000, () => console.log('Example app listening on port 3000!'))