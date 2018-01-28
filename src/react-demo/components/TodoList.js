import React, { Component, PropTypes } from 'react'
import Todo from './Todo'

export default class TodoList extends Component {
	render (){
		//console.log(this.props);
		return (
			<ul>
				{ this.props.todos.map((todo, id) => 
					<Todo 
						{...todo} 
						key = {id}
						onClick = { () => this.props.onTodoClick(id) }
					></Todo>
				)}
			</ul>
		)
	}
} 

// TodoList.propTypes = {
// 	onTodoClick: PropTypes.func.isReuqired,
// 	todos: PropTypes.arrayOf(PropType.shapeOf({
// 		text: PropTypes.string.isRequired,
// 		completed: PropTypes.bool.isRequired
// 	}).isRequired).isRequired
// }
