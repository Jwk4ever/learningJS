import { combineReducers } from 'redux';
import {
	ADD_TODO,
	TOGGLE_TODO,
	CHANGE_FILTER
} from '../actions/actions.js'

function todos (state = [], action){
	switch (action.type){
		case ADD_TODO:
			//let {id, content, done} = action.payload;
			return [
				...state,
				{	
					id: action.payload.id,
					content: action.payload.content,
					done: action.payload.done
				}
			];
		case TOGGLE_TODO:
			return [...state.slice(0, action.payload.id),
					Object.assign({}, state[action.payload.id], {
						done: true
					}),
					...state.slice(action.payload.id + 1)
					];
		default: 
			return state;
	}
}

function filters(state = 'ALL', action){
	switch (action.type){
		case CHANGE_FILTER:
			return action.payload.filter;
		default:
			return state;
	}
}

const todoapp =  combineReducers({				
	todos,
	filters
})

// console.log(todoapp);

export default todoapp;