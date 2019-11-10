/*
* @Author: Chris
* @Date:   2019-10-14 16:59:52
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-15 15:49:36
*/
const express = require('express')
const app = express()
/*
const usersRouter = require('./routes/users.js')
const blogsRouter = require('./routes/blogs.js')
*/
app.use(express.static('public'))
app.use("/users",require('./routes/users.js'))
app.use("/blogs",require('./routes/blogs.js'))

/*
app.use("/users",usersRouter)
app.use("/blogs",blogsRouter)
*/
/*
app.get('/users', (req, res,next) => {res.send('get response data!')})
app.post('/users', (req, res) => res.send('post response data!'))
app.put('/users', (req, res) => res.send('put response data!'))
app.delete('/users', (req, res) => res.send('delete response data!'))
*/

/*
app.get('/blogs', (req, res,next) => {res.send('get response data!')})
app.post('/blogs', (req, res) => res.send('post response data!'))
app.put('/blogs', (req, res) => res.send('put response data!'))
app.delete('/blogs', (req, res) => res.send('delete response data!'))
*/

app.listen(3000, () => console.log('Example app listening on port 3000!'))