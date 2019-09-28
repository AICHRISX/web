/*
* @Author: getgitch95
* @Date:   2019-08-13 08:44:30
* @Last Modified by:   getgitch95
* @Last Modified time: 2019-08-13 09:08:56
*/
const fs = require('fs')
const path = require('path')
const util = require('util')

const dataPath = path.normalize(__dirname+"/../data/item.json")
const reafFile = util.promisify(fs.readFile)
async function get(){
	const data = await readFile(dataPath)
	const arr = JSON.parse(data)
	return arr
}

module.exports = {
	get
}