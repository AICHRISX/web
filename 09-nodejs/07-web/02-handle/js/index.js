/*
* @Author: getgitch95
* @Date:   2019-08-12 17:00:59
* @Last Modified by:   getgitch95
* @Last Modified time: 2019-08-13 08:12:33
*/
;(function($){
	var $input = $('.todo-input')
	$input.on('keydown',function(ev){
		if(ev.keyCode == 13){
			//发送ajax
			$.ajax({
				url:"/add",
				type:'post',
				dataType:'json',
				data:{
					task:$input.val()
				},
				success:function(result){
					console.log(result)
				}
			})
		}
	})
})(jquery)