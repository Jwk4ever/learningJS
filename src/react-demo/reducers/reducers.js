import { combineReducers } from 'redux'
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/actions'

const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter (state = SHOW_ALL, actions) {
	switch (actions.type) {
		case SET_VISIBILITY_FILTER:
			return actions.filter;
		default:
			return state; 
	}
}

function todos (state = [], actions) {
	switch (actions.type) {
		case ADD_TODO:
			return [
				...state,
				{
					text: actions.text,
					completed: false
				}
			];
		case TOGGLE_TODO:
			return [
				...state.slice(0,actions.id),
				Object.assign({},state[actions.id],{
					completed: !state[actions.id].completed
				}),
				...state.slice(actions.id + 1)
			];
  		default:
			return state;
	}
	//console.log(state);
}

let todoApp = combineReducers({
	visibilityFilter,
	todos
})


export default todoApp;
