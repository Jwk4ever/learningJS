
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

let id = 0;

export function addTodo (val){
	return {
		type: ADD_TODO,
		payload: {
			id: id ++ ,
			done: false,
			content: val
		}
	}
}

export function toggleTodo (id){
	return {
		type: TOGGLE_TODO,
		payload: {
			id
		}
	}
}