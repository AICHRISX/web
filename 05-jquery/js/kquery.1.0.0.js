/*
* @Author: Chris
* @Date:   2019-10-06 10:14:47
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-06 10:27:00
*/
(function(window){
	var kQuery = function(){
		return new kQuery.prototype.init();
	}

	kQuery.fn = kQuery.prototype = {
		constructor:kQuery,
		init:function(){

		}
	}
	kQuery.fn.init.prototype = kQuery.fn;
	window.kQuery = window.$ = kQuery;

})(window);