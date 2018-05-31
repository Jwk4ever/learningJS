import React, { Component } from 'react'
import TodoItem from './Todo.jsx'

export default class TodoList extends Component {
	render (){
		let { todos, toggleTodo} = this.props;
		return (
		<ul>
			{ todos.map((item, index) => {
				return <TodoItem 
					toggleTodo = {toggleTodo}
					key = {index}
					{...item}
					/>
			})}
		</ul>
		)
	}	
}