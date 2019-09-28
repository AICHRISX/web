/*
* @Author: getgitch95
* @Date:   2019-08-13 08:40:07
* @Last Modified by:   getgitch95
* @Last Modified time: 2019-08-13 11:06:58
*/
;(function($){
	var $input = $('.todo-input')
	var $wrap = $('.todo-wrap') 
	$input.on('keydown',function(ev){
		if(ev.keyCode == 13){
			//1.发送a jax
			$.ajax({
				url:"/add",
				type:'post',
				datatype:'json',
				data:{
					task:$input.val()
				},
				success:function(result){
					//2.根据后台的返回结果做相应的处理
					//2.1成功的情况后台返回任务对象，根据任务对象生成DOM节点并且插入
					if(result.code == 0){
						var data = result.data
						var $dom = $(`<li class="todo-item">{{ data.task }}</li>`)
						$wrap.append($dom)
						$input.val('')
					}			
					//2.2失败的情况弹出失败消息
					else{
						alert(result.message)
					}
				}
			})
		}
	})
})