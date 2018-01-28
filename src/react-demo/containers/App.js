import React ,{ Component, PropTypes }from 'react'
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from '../actions/actions'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import Footer from '../components/Footer'
import { connect } from 'react-redux' 

class App extends Component {
	render () {
		const { dispatch, visibleTodos, visibilityFilter } = this.props;
		// console.log(this.props);
		// console.log(visibleTodos);
		// console.log(visibilityFilter);
		return <div>
			<AddTodo 
				onAddClick = { text => 
					dispatch(addTodo(text))
				}
			/>
			<TodoList 
				todos = { visibleTodos }
				onTodoClick = { id => 
					dispatch(toggleTodo(id))
				}
			/>
			<Footer 
				filter = { visibilityFilter }
				onFilterChange = { nextFilter =>
					dispatch(setVisibilityFilter(nextFilter))
				}
			/>
		</div>
	}
}

//console.log( );

// App.propTypes = {
// 	visibilityTodos: PropTypes.arrayOf( PropTypes.shape({
// 		type: PropTypes.string.isRequired,
// 		text: PropTypes.string.isRequired
// 	}).isRequired).isRequired,
// 	visibilityFilter: PropTypes.oneOf([
// 			"SHOW_ALL",
// 			"SHOW_COMPLETED",
// 			"SHOW_ACTIVE"
// 		]).isRequired
// }

function selectTodos(todos, filter){
	switch ( filter ){
		case VisibilityFilters.SHOW_ALL:
			return todos;
		case VisibilityFilters.SHOW_COMPLETED:
			return todos.filter(todo => todo.completed) 
		case VisibilityFilters.SHOW_ACTIVE:
			return todos.filter(todo => !todo.active)
	} 
}

function select (state) {
	return {
		visibleTodos: selectTodos(state.todos, state.visibilityFilter),
		visibilityFilter: state.visibilityFilter 
	}
}

export default connect(select)(App);