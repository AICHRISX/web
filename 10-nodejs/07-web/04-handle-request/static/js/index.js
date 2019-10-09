/*
* @Author: getgitch95
* @Date:   2019-08-13 08:40:07
* @Last Modified by:   getgitch95
* @Last Modified time: 2019-08-13 12:17:09
*/
;(function($){
	var $input = $('.todo-input')
	var $wrap $('.todo-wrap')
	//添加
	$input.on('keydown',function(ev){

	})
	//删除
	//注意：由于动态添加任务，所以需要用事件代理
	$wrap.on('click','li',function(){
		var $this = $(this)
		$.ajax({
			url:'/del',
			dataType:'json',
			data:{
				id:$this.data('id')
			},
			success:function(result){
				//2.根据后台的返回结果做相应的处理
				//2.1处理成功，移除当前dom节点
				if(result.code ==0){
					
				}
				//2.2处理失败，弹出失败信息
			}
		})	
	})
	
})(jQuery)