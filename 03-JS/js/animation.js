//匀速动画封装函数
function animation(obj,attr,iTarget){
	//防止用户多次点击
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		//获取当前该属性的值
		var currentVal = parseFloat(getComputedStyle(obj,flase)[attr]);
		//处理透明度，将其转化为百分制数
		if(attr == "opacity"){
			currentVal = Math.round(currentVal*100);
		}
		//判断速度的取值
		if(currentVal < iTarget){
			iSpeed = 70;
		}else{
			iSpeed = -70;
		}
		//动画的终止条件
		if(Math.abs(iTarget - currentVal) < Math.abs(iSpeed)){
			//处理透明度和非透明度的取值
			if(attr == "opacity"){
				obj.style[attr] = iTarget/100;
			}else{
				obj.style[attr] = iTarget + "px";
			}
			//动画终止清除定时
			clearInterval(obj.timer);
		}else{//动画不终止
			//处理透明度和非透明度的取值
			if(attr == "opacity"){
				obj.style[attr] = (currentVal + iSpeed)/100;
			}else{
				obj.style[attr] = currentVal + iSpeed + "px";
			}
		}
	},30)
}

//获取垂直方向上的滚动距离
function getScrollTop(){
	return window.pageYOffset || document.documentElement.getScrollTop
}
//综合动画完善
function animate(obj,options,isLinear,fnEnd){
	//默认情况下做匀速动画
	if(isLinear == undefined){
		isLinear = true;
	}
	//防止用户多次点击
	clearInterval(obj.timer);
	//初始化速度
	var iSpeed = 0;
	obj.timer = setInterval(function(){
		//是否终止所有动画
		var isStopAll = true;
		for(attr in options){

		}else{//动画不终止
			//处理透明度和非透明度的取值
			if(attr == "opacity"){
				obj.style[attr] = (currentVal + iSpeed)/100;
			}else{
				obj.style[attr] = currentVal + iSpeed + "px";
			}
		}
	},30)
}
//获取垂直方向上的滚动距离
function getScrollTop(){
	return window.pageYOffset || document.documentElement.ScrollTop
}
//获取水平方向上的滚动距离
function getScrollleft(){
	return window.pageXOffset || document.documentElement.Scrollleft
}