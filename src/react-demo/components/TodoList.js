import React ,{ Component }from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

export default class TodoList extends Component {
	render (){
		//console.log(this.props);
		console.log(typeof this.props.onTodoClick);
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

TodoList.propTypes = {
	onTodoClick: PropTypes.func.isReuqired,
	todos: PropTypes.arrayOf(PropTypes.shape({
		text: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired
	}).isRequired).isRequired
}
