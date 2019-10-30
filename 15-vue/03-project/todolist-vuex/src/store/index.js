/*
* @Author: Chris
* @Date:   2019-10-30 10:54:27
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-30 10:58:28
*/
//store的出口文件
import Vue from 'vue'
import Vuex from 'vuex'

import state from './state.js'
import mutations from './mutations.js'	
import actions from './actions.js'	
import getters from './getters.js'
Vue.use(Vuex)

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})