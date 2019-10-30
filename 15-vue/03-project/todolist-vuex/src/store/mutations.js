/*
* @Author: Chris
* @Date:   2019-10-30 10:52:32
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-30 12:14:49
*/
//唯一更改state的方法
//mutation必须是同步函数
import {ADD_TODO,DEL_TODO,SELECT_ALL_TODO} from './types.js'
export default {
	[ADD_TODO](state,todo){
        state.todos.unshift(todo)
    },
    [DEL_TODO](state,index){
        state.todos.splice(index,1)
    },
    [SELECT_ALL_TODO](state,value){
        state.todos.forEach((item)=>{
        	item.done = value
        })
    }
}