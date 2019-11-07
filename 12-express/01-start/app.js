/*
* @Author: Chris
* @Date:   2019-10-14 16:59:52
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-14 17:03:06
*/
const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(3000, () => console.log('Example app listening on port 3000!'))