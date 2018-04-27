
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const CHANGE_FILTER = 'CHANGE_FILTER';

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

export function changeFilter (filter){
	return {
		type: CHANGE_FILTER,
		payload: {
			filter
		}
	}
}