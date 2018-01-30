//chapter20 



//chapter21

//原生ajax请求
/***
* @param method 
* @param url
* @param data
* @param async 
*
* 返回响应文本 或 错误原因
*/
function originAjax(method, url, data, async){
	let xhr = new XMLHTTPRequest();
	xhr.onreadystatechange = () => {
			if( xhr.readyState === 4 ){
				if((xhr.status >= 200 && xhr.status < 300)|| xhr.status === 304){
					return xhr.responseText;
				} else {
					return xhr.status;
				}
			}
		}
	
	xhr.open(method, url, ture);
	xhr.send(data);
}


//用Promise重写AJAX
/***
* @param method 
* @param url
* @param data
* @param async 
*
* 返回promise
*/
function ajaxPromise(method, url, data = null, async = true){
	return new Promise((resolve, reject) => {
		let xhr = new XMLHTTPRequest();
		xhr.onreadystatechange = () => {
				if( xhr.readyState === 4 ){
					if((xhr.status >= 200 && xhr.status < 300)|| xhr.status === 304){
						resolve(xhr.responseText)
					} else {
						reject(xhr.status)
					}
				}
			}
		xhr.open(method, url, ture);
		xhr.send(data);
	})
}

//函数柯里化

function bind(fn, context){
	let args = Array.protptype.slice.call(arguments, 2);
	return function(){
		let innerArgs = Array.prototype.slice.call(arguments);
		let finalArgs = args.concat(innerArgs);
		return fn.apply(context, finalArgs);
	}
}

//自定义事件

function EventTarget(){
	this.handlers = {};
}

EventTartget.prototype = {
	constructor: EventTarget,
	addHandler: function(type, handler){
		if(this.handlers[type]){
			this.handlers[type].push(handler);
		}else{
			this.handlers[type] = [handler];
		}
	},
	fire: function(event){
		if(!event.target){
			event.target = this;
		}
		if(this.handlers[event.type] instanceof Array){
			var handlers = this.handlers[event.type];
			handlers.forEach(ele => ele(event));
		}
	},
	removeHandler: function(type, handler){
		if(this.handlers[type] instanceof Array){
			var handlers = this.handlers[event.type];
			for(var i = 0, len = handlers.length; i < len; i++){
				if(handler === handlers[i]){
					handlers.splice(i,1);
					break
				}
			}
		}
	}
}







