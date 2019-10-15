/*
* @Author: Chris
* @Date:   2019-10-15 15:30:30
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-15 15:45:09
*/
const express = require('express')

const router = express.Router()


router.get('/', (req, res,next) => {res.send('get response data!')})
router.post('/', (req, res) => res.send('post response data!'))
router.put('/', (req, res) => res.send('put response data!'))
router.delete('/', (req, res) => res.send('delete response data!'))





module.exports = router