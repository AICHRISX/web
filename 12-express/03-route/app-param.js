/*
* @Author: Chris
* @Date:   2019-10-14 16:59:52
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-14 21:18:21
*/
const express = require('express')
const app = express()


app.use(express.static('public'))

// /users/34/books/8888
app.get('/users/:userId/books/:bookId', (req, res,) => {
	console.log(req.params)// { userId: '34', bookId: '8888' }
	res.send('get response data!')
})

app.get('/',(req,res)=>{
	console.log(req.query)
	res.send('get response data!')

})


app.listen(3000, () => console.log('Example app listening on port 3000!'))