import React, { Component } from 'react';

export default class AddTodoItem extends Component {
	constructor (props){
		super(props);
		this.clickhandler = this.clickhandler.bind(this);
	}
	clickhandler (e){
		e.preventDefault();
		let val = this.input.value;
		val.trim() && this.props.addtodo(val);
	}
	render() {
		return (
			<div>
			<input type='text' ref = { input => this.input = input }/>
				<button onClick={ this.clickhandler}>添加</button>
			</div>
			)
		}	
}