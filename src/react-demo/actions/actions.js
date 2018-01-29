export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
};

let todoID = 0;

export function addTodo (text) {
	return {
		type: ADD_TODO,
		id: todoID ++,
		text
	}
}

export function toggleTodo (id) {
	//console.log(id);
	return {
		type: TOGGLE_TODO,
		id
	}
}

export function setVisibilityFilter (filter) {
	return {
		type: SET_VISIBILITY_FILTER,
		filter
	}
}