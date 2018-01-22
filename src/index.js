//console.log('hello MEITUAN');

let Tool = (function(){
	
	let firstMethod = () => 'Hello !'

	return {
		firstMethod: firstMethod
	}
})()

console.log(Tool.firstMethod());