import React, { Component } from 'react';


export default class TodoItem extends Component {
	render (){
		let { content, done, toggleTodo} = this.props;
		return <li 
			className = {done ? 'done': 'undone'} 
			onClick = {toggleTodo}>
			{content}
			</li>
	}
}