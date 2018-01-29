const redux = require('redux');

let reducer = function(state = {count: 0}, actions){
	switch (actions.type){
		case "MIDDLEWARE_TEST":
			console.log('=====TEST=====');
			state.count = state.count + 1;
		default : return state; 
	} 
}

let middleware1 = function(store){
	return function(dispatch){
		return function(action){
			console.log('middleware1 before');
			dispatch(action);
			console.log('middleware1 after');
		}
	}
}

let middleware2 = function(store){
	return function(dispatch){
		return function(action){
			console.log('middleware2 before');
			dispatch(action);
			console.log('middleware2 after');
		}
	}
}

let middleware3 = function(store){
	return function(dispatch){
		return function(action){
			console.log('middleware3 before');
			dispatch(action);
			console.log(store.getState());
			console.log('middleware3 after');
		}
	}
}

let store =	redux.createStore(
	reducer,
	redux.applyMiddleware(
		middleware1,
		middleware2,
		middleware3
	)
)

let action = {
	type: "MIDDLEWARE_TEST"
}

let a = store.subscribe(()=>{
	console.log('subscribe');
	console.log(store.getState());
})

store.dispatch(action);

a();
//console.log(a);


