/*
* @Author: Chris
* @Date:   2019-10-30 10:50:47
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-30 11:27:08
*/
//组件中用由this.$store.dispatch方法来派发action,
//action中用commit来提交mutation
//action中可以包含异步操作
import { ADD_TODO } from './types.js'
export default {
	[ADD_TODO]({commit},todo){
		commit(ADD_TODO,todo)
	}
}