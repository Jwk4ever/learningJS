//建立简单类库
(function(global){
	//定义私有变量
	var ArrProto = Array.prototype,
		StrProto = String.prototype,
		ObjProto = Object.prototype;

	var _ = {
		//转化成数组
		toArray:function(){
			try{
				return ArrProto.slice.call(arguments);
			}catch(e){
				var arr = [];
				for(var i = 0,length = arguments.length;i < length;i++){
					arr[i] = arguments[i];
				}
				return arr;
			}
		},
		//数组中查询元素位置
		ArrayFindIndex: function(arr, ele){
			for(let i = 0, len = arr.length; i < len; i++){
				if(arr[i] === ele){
					return i;
				}  
			}
		},
		//数组相等
		isArrayEqual: function(arr1, arr2){
			if(arr1 === arr2)return true;
			if(arr1.length !== arr2.length) return false;
			for(var i = 0, len = arr1.length; i < len; i++){
				if(arr1[i] !== arr2[i]){
					return false;
				}
			} 
			return true;
		},
		//数组中删除元素
		removeElementFromArray: function(array, ele){
			for(var i = 0,len = array.length;i < len;i++){
				if(array[i] === ele){
					array.splice(i,1);
					len --;
					i --;
				}
			}
			return array;
		},
		//挑选对象属性值，返回新对象
		pick: function(obj){
			var names = this.toArray(arguments).slice(1),
				target = {};
				console.log(names);
			for(var i = 1, len = names.length; i < len; i++){
				var key = names[i];
				target[key] = obj[key];
				console.log(key);
			}
			return target;
		},
		//类型检测
		typeOf:function(arg){
			if(typeof arg === 'object'){
				if(arg instanceof Array){
					return 'array';
				}else if(arg instanceof Function){
					return 'function';
				}else if(arg instanceof RegExp){
					return 'regexp';
				}else{
					return 'object';
				}
			}else{
				return typeof arg;
			}
		},
		//数字相等
		numisEqual:function(arg1, arg2){
			if(arg1 === arg2){
				return 1/arg1 === 1/arg2 ;
			}else{
				return arg1 != arg1 && arg2 != arg2;
			}
		},
		//字符串重复
		strRepeat: function(str, count){
			var text = '';
			for(var i = 0;i < count;i++){
				text += str
			}
			return text;
		},
		//深拷贝
		deepCopy: function(obj){
			var typeOf = this.typeOf, newObj = {};
			for (key in obj){
				if(typeOf(obj[key]) === 'object'){
					newObj[key] = this.deepCopy(obj[key]);
				}else if(typeOf(obj[key]) === 'array'){
					for(var i = 0,length = obj[key].length;i < length;i++){
						if(typeOf(obj[key][i]) === 'array' || typeOf(obj[key][i]) === 'object'){
							newObj[key][i] = this.deepCopy(obj[key][i]);
						}else{
							newObj[key][i] = obj[key][i];
						}
					}
				}else{
					newObj[key] = obj[key];
 				}
			}
			return newObj
		},
		//给函数结果增加缓存,应该有问题
		memorize: function(func){
			var args = null,
				result = null;
			return function(){
				if(arguments != args){
					return result;
				}
				args = arguments;
				result = func.apply(null, arguments);
				return result;
			}
		},
		//返回随机数
		random: function(lowerValue, upperValue){
			return Math.floor(Math.random()*(upperValue - lowerValue)) + lowerValue;
		},
		//选择Dom元素
		selectDom: function(str){
			if(this === window){
				return document.querySelectorAll(str);
			}
		},
		//ajax 请求, 返回Promise对象
		ajax: function(url, method, data = null){
			let xhr = new XMLHttpRequest();
			return new Promise(function(resolve, reject){
				xhr.onreadystatechange = function(){
					if(xhr.readyState == 4 && xhr.status == 200){
						resolve(xhr.responseText)
					}else{
						reject(xhr.status)
					}
				}
				xhr.open(method, url, true);
				xhr.send(data)
			});
		},
		//是否为电话号码
		isPhone: function(str){
			return /^1[3|4|5|7|8]\d{9}$/.test(str);
		},
		//是否为邮箱地址
		isEmail: function(str){
			return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
		},
		//获取滚动条距离页面顶部的距离
		getScrollTop: function(){
			return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
		},
		//设置滚动条高度
		setScrollTop: function(val){
			/**
			*	param 1 x轴位置
			*	param 2 y轴位置
			**/
			window.scrollTo(0,val);
		},
		//获取元素的在页面中的位置
		offset: function(ele){
			var pos = {
				left : 0,
				top : 0
			}
			while(ele){
				pos.left += ele.offsetLeft;
				pos.top += ele.offsetTop;
				ele = ele.offsetParent;
			}
			return pos;
		},
		//获取css类
		getCss: function(dom){
			return dom.classList;
		},
		//添加css类
		addcssClass: function(dom, className){
			dom.classList.push(className);
		},
		//删除css类
		removeClass: function(dom, className){
			this.removeElementFromArray(dom.classList, className);
		}
	}

	if(typeof module == "undefined"){
		global._ = _;
	}else{
		module.exports = _;
	}
})(this)

//几种方法实现同一方法

//利用Object.defineProperty,防止类库被被串改

//继承实现

// function A1(){
// 	var a = '1';
// 	function B(){
// 		var a = '2';
// 		setTimeout(function(){
// 			console.log(a);
// 		},1000);

// 		console.log(this == global);
// 	}
// 	B();
// 	console.log(a);
// }
// A1();
