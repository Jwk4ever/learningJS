// async function a(){
// 	var a = await 10;
// 	return a;
// }

// var b = a();
// b.then((val)=>{
// 	console.log(val)
// })


const add = '1+b'
const minus = '1-c'
const add = '2+b';
const minus = '2-b';
var redux = require('redux');

function reducer(action){
	return {};
}

let middleware1 = store => next => action => {
	console.log('middleware1');
	//next(action);
	//store.dispatch(action);
	return action;
	console.log('middleware1');
}

let middleware2 = store => next => action => {
	console.log('middleware2');
	//next(action);
	return action;
	console.log('middleware2');
}

let middleware3 = store => next => action => {
	console.log('middleware3');
	//next(action);
	return action;
	console.log('middleware3');
}

let store = redux.createStore(reducer, redux.applyMiddleware(
	middleware1,
	middleware2,
	middleware3
));




store.dispatch({
	type: 'test'
})