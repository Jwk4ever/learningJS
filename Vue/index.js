function Observer(obj){
	this.data = {};
	var _value;
	for (key in obj){
		Object.defineProperty(this.data, key, {
			enumerable: true,
			configurable: true,
			get: function(){
				console.log(`你访问了${key}`);
				return _value;
			},
			set: function(val){
				console.log(`${key} 现在为 ${val}`);
				_value = val;
			}
		})
	}
}

var a = new Observer({
	name: 'jiaweikang'
})

console.log(a.data.name);
a.data.name = 'sun'