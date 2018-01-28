import React, { Component, PropTypes } from 'react'

export default class Todo extends Component {
	render() {
		return (
			<li
				onClick = { this.props.onClick }
				style = {{
					textDecoration: this.props.completed ? 'line-through': 'none'
				}}
			>{ this.props.text }
			</li>
		)
	}
}

// Todo.propTypes = {
// 	onClick: PropTypes.func.isRequired,
// 	text: PropTypes.string.isRequired,
// 	completed: RropType.bool.isRequired
// }

