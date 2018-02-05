const redux = require('redux');
const reduxPromise = require('redux-promise');

const GET_DATA = "GET_DATA"

const api = {
	getData: function(){
		return new Promise((resolve, reject)=>{
			setTimeout(()=>{
				resolve('success');
			},1000);
		})
	}
}

let reducer = function(state = {count: 0, data: ''}, actions){
	switch (actions.type){
		case "MIDDLEWARE_TEST":
			console.log('=====TEST=====');
			state.count = state.count + 1;
		case GET_DATA:
		console.log(actions);
			if(!actions.error){
				state.data = actions.payload;
			}else{
				state.date = actions.payload;
			}
		default: return state; 
	} 
}

let middleware1 = function(store){
	//console.log(store);
	return function(dispatch){
		return function(action){
			console.log('middleware1 before');
			dispatch(action);
			console.log('middleware1 after');
			return action;
		}
	}
}

let middleware2 = store => next => action => {
	console.log('middleware2 before');
	next(action);
	console.log('middleware2 after');
	return action;
}


let middleware3 = function(store){
	return function(dispatch){
		return function(action){
			console.log('middleware3 before');
			dispatch(action);
			//console.log(store.getState());
			console.log('middleware3 after');
			return action;
		}
	}
}

let store =	redux.createStore(
	reducer,
	redux.applyMiddleware(
		// middleware1,
		// middleware2,
		// middleware3,
		reduxPromise
	)
)

let action = {
	type: "MIDDLEWARE_TEST"
}

let asyncAction = {
	type: GET_DATA,
	paylaod: api.getData()
}

let a = store.subscribe(()=>{
	//console.log('subscribe');
	console.log(store.getState());
})

//store.dispatch(action);
store.dispatch(asyncAction);

a();
// setTimeout(()=>{
// 	console.log(store.getState());
// },1000);
//console.log(a);




