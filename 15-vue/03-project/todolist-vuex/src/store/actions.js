/*
* @Author: Chris
* @Date:   2019-10-30 10:50:47
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-30 11:09:05
*/
//组件中用由this.$store.dispatch方法来派发action,
//action中用commit来提交mutation
//action中可以包含异步操作
export default {
	addTodo({commit},todo){
		commit('addTodo',todo)
	}
}