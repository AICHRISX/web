(function($){
	function Search($elem,options){
		console.log(this);
		//1.罗列属性
		this.$elem = $elem;
		this.options = options;
		this.$searchInput = this.$elem.find('.search-input');
		this.$searchBtn = this.$elem.find('.search-btn');
		this.$search-Layer = this.$elem.find('.search-layer');
		this.$search-Form = this.$elem.find('.search-form');

		//2.初始化
		this.init();
		//3.判断是否显示下拉层
		if(this.options.autocomplete){
			this.autocomplete();
		}
	}
Search.prototype = {	
		constructor:Search,
		init:function(){
			//监听提交按钮事件
			this.$searchBtn.on('click',$.proxy(this.submit,this));
		},
		submit:function(){
			if(!this.getInputVal()){
				//如果没有数据则不提交请求
				return false; 
			}
			this.$searchForm.trigger('submit');
		},
		getInputVal:function(){
			return $.trim(this.$SearchInput.val());		
		},
		autocomplete:function(){
			//1.初始化显示隐藏插件
			this.$searchLayer.......
			//监听输入框输入事件获取数据(jsonp获取数据)
			this.$searchInput.on('input',$.proxy(this.getData,this));
		},
		getData:function(){
			//获取数据
			//如果数据为空则不发送请求
			if(this.getInputVal()==''){
				return;
			}


			console.log('will data');
			$.ajax({
				url:this.options.url + this.getInputVal();
				dataType:'jsonp',
				jsonp:'callback'
			})
			.done(function(data){
				//1.生成html结构
				var html = '';
				for(var i = 0;i<data.result.length;i++){
					html += '<li>'data.result[i][0]+'</li>'
				}

				//2.将内容插入到搜索下拉层中
				this.$searchLayer.html(html);
				//3.显示下拉层
				console.log(data);
			})
			.false(function(err){
				console.log(err);
			})
		}
	}
	//当不传参数时的默认配置信息
	Search.DEFAULTS = {
		autocomplete:true,
		url:''
	}
	//封装dropdown插件
	$.fn.extend({
		search:function(options){
			//1实现隐式迭代
			this.each(function(){//实现单例模式
				var $elem = $(this);
				var search = $elem.data('search');
				if(!search){
					options = $.extend({},Search.DEFAULTS,options);
					search = new Search($elem,options)
				}
			})
		}
	})

})