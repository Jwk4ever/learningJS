import { wait } from '../utils';

class A {
	@loading
	async get (){
		let result = await wait();
		console.log(result);
	}
	// @loading
	// sayName (){
	// 	console.log('test');
	// }
}

// function loading(target, name, descriptor){
// 	let _val = descriptor.value;
// 	return descriptor;
// }

function loading(target, name, descriptor){
	let _val = descriptor.value;
	_val(); 
	return descriptor;
}

let a = new A();

a.sayName();


var a = new Promise((resolve) => {
	resolve({a: 1});
})

a.then((val) => {
	console.log(val.a);
})