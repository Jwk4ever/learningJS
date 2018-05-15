import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import AddTodoItem from '../components/AddTodoItem.jsx';
import TodoList from '../components/TodoList.jsx';
import FilterList from '../components/FilterList.jsx';
import { connect } from 'react-redux';
import * as todoAction from '../actions/actions.js'

class App extends Component {
	componentWillReceiveProps (nextProps){
		console.log(nextProps);
	}
	render (){
		let { boundTodoAction, todos} = this.props;
		let { addTodo, toggleTodo, changeFilter } = boundTodoAction;
		return (
			<div>
				<AddTodoItem addtodo = { addTodo }/>
				<TodoList todos = { todos } toggleTodo = { toggleTodo}/>
				<FilterList changeFilter = { changeFilter }/>
			</div>
			) 
		}
	}

let mapStateToProps = (state) => {
	let { todos , filters} = state; 
	//console.log(todos);
	switch (filters){
		case "DONE":
			return {
				todos: todos.filter(item => item.done)
			};
		case "UNDONE":
			return {
				todos: todos.filter(item => !item.done) 
			};
		case "ALL":
		default:
			return { todos };
	}
}

let mapDispatchToProps = (dispatch) => {
	let { addTodo, toggleTodo, changeFilter }	= todoAction;
	let boundTodoAction = bindActionCreators({
			addTodo,
			toggleTodo,
			changeFilter
		}, dispatch);
	return {
		boundTodoAction
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

