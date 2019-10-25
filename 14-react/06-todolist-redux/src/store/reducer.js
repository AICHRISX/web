/*
* @Author: Chris
* @Date:   2019-10-25 20:21:20
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-25 20:49:52
*/
const defaultState = {
	list:["吃饭","睡觉","敲代码"],
    task:''
}

export default (state=defaultState,action)=>{

	if(action.type == 'change_item'){
		//错误的写法
		state.task = action.payload
	}
	return state
}