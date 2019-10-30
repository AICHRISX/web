/*
* @Author: Chris
* @Date:   2019-10-30 10:52:32
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-30 11:22:51
*/
//唯一更改state的方法
//mutation必须是同步函数
export default {
	addTodo(state,todo){
		state.todos.unshift(todo)
	}
}