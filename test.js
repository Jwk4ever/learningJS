const { createStore, applyMiddleware} = require('redux');
const reduxPromise = require('redux-promise');
const { createAction } = require('redux-actions');
const GET_DATA = "GET_DATA";

const getData = () => {
	return new Promise((resolve, reject) => {
		setTimeout(()=>{
			resolve('success');
		}, 500)
	})
}

let reducers = function(state, action){
	switch (action.type) {
		case GET_DATA: 
			//console.log(state);
			state.text = action.payload;
		default:
			return state;
	}
}

let middleWare = store => next => actions => {
	console.log(actions);
	next(actions);
	console.log('------' + store.getState().text);
	return actions;
}

let initialState = {
	text: 'init'
}

let store = createStore(reducers, initialState, applyMiddleware(
		middleWare,
		reduxPromise
	));

// let actions = {
// 	type: GET_DATA,
// 	payload: getData()
// }
// // // 
function actionCreator(){
	return {
		text: getData()
	}
}


let actions = createAction(GET_DATA, actionCreator)();

console.log(actions);

store.dispatch(actions);


