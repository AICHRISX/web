/*
* @Author: Chris
* @Date:   2019-10-30 10:50:47
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-30 12:11:13
*/
//组件中用由this.$store.dispatch方法来派发action,
//action中用commit来提交mutation
//action中可以包含异步操作
import { ADD_TODO,DEL_TODO,SELECT_ALL_TODO } from './types.js'
export default {
	[ADD_TODO]({commit},todo){
		commit(ADD_TODO,todo)
	},
	[DEL_TODO]({commit},index){
		commit(DEL_TODO,index)
	},
	[SELECT_ALL_TODO]({commit},value){
		commit(SELECT_ALL_TODO,value)
	}
}