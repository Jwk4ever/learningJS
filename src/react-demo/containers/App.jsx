import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import AddTodoItem from '../components/AddTodoItem.jsx';
import TodoList from '../components/TodoList.jsx';
import { connect } from 'react-redux';
import * as todoAction from '../actions/actions.js'

class App extends Component {
	render (){
		let { boundTodoAction, toggleTodo, todos} = this.props;
		return (
			<div>
				<AddTodoItem addtodo = { boundTodoAction.addTodo }/>
				<TodoList todos = { todos } toggleTodo = { boundTodoAction.toggleTodo}/>
			</div>
			) 
		}
	}

let mapStateToProps = (state) => {
	let { todos } = state; 
	return {
		todos
	}
}

let mapDispatchToProps = (dispatch) => {
	let { addTodo, toggleTodo }	= todoAction;
	let boundTodoAction = bindActionCreators({
			addTodo,
			toggleTodo
		}, dispatch);
	return {
		boundTodoAction
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

