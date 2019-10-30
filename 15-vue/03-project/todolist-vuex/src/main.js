/*
* @Author: Chris
* @Date:   2019-10-29 17:07:48
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-30 10:59:56
*/
import Vue from 'vue'
import App from './App.vue'

//引入store
import store from './store'

Vue.config.productionTip = false

new Vue({
	store,
  	render: h => h(App),
}).$mount('#app')