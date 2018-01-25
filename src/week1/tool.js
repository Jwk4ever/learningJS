//建立简单类库

module.exports = (function(){
	//定义私有变量
	var ArrProto = Array.prototype,
		StrProto = String.prototype,
		ObjProto = Object.prototype;


	return {
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
		//返回随机数
		random : function(lowerValue, upperValue){
			return Math.floor(Math.random()*(upperValue - lowerValue)) + lowerValue;
		},
		//选择Dom元素
		selectDom : function(str){
			if(this === window){
				return document.querySelectorAll(str);
			}
		},
		//计时器
		Timer : function(){

		},
		//选择器 
		select : function(str){
			var node = document.querySelectorAll(str);
		},
		//css
		css : function(str){
			
		}
	}
})();

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
