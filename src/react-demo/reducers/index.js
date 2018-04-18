import { combineReducers } from 'redux';

function todos (state = [], action){
	switch (action.type){
		case "ADD_TODO":
			//let {id, content, done} = action.payload;
			return [
				...state,
				{	
					id: action.payload.id,
					content: action.payload.content,
					done: action.payload.done
				}
			]
		case "TOGGLE_TODO":
			//let { id } = action.payload;
			return [...state.slice(0, action.payload.id),
					Object.assign({}, state[action.payload.id], {
						done: true
					}),
					...state.slice(action.payload.id + 1)
					]  ;
		default: 
			return state;
	}
}


const todoapp =  combineReducers({				
	todos
})

// console.log(todoapp);

export default todoapp;