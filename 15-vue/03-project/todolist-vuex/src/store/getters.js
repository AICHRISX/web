/*
* @Author: Chris
* @Date:   2019-10-30 10:53:50
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-30 12:00:09
*/
//store的计算属性
export default {
	total(state){
		return this.todos.length
	},
	totalDone(state){
		return this.todos.reduce((total,item)=>{
			if(item.done){
				total = total + 1
			}
			return total
		},0)
	}
}