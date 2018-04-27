import React, { Component } from 'react';


export default class TodoItem extends Component {
	constructor (){
		super();
		this.clickHandler = this.clickHandler.bind(this);
	}
	clickHandler (e){
		e.preventDefault();
		let { id, toggleTodo } = this.props;
		toggleTodo(id);
	}
	render (){
		let { content, done } = this.props;
		return <li 
			className = {done ? 'done': 'undone'} 
			onClick = {this.clickHandler}>
			{content}
			</li>
	}
}