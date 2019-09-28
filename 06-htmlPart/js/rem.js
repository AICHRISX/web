;(function(win,doc){
	//获取元素
	var root = doc.getElementsByTagName('html')[0]

	function refresh(){



		//获取视口的宽度
		var Width = doc.body.clientWidth || doc.documentElement.clientWidths
		
		var fontSize = width/10+'px'
		root.style.fontSize = fontSize
	}
	win.addEventListener('DOMContentLoaded',refresh,false)
	//页面大小发生变化
	win.addEventListener('resize',refresh,false)

})(window,document)