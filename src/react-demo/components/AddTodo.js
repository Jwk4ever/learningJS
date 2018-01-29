import React ,{ Component }from 'react'
import PropTypes from 'prop-types'

export default class AddTodo extends Component {
	render () {

		return (
			<div>
				<input type='text' ref='input'/>
				<button onClick = { e => this.handlerClick(e) }>添加</button>
			</div>
		)
	}
	
	handlerClick (e) {
		e.stopPropagation();
		e.preventDefault();
		let node = this.refs.input,
			text = node.value.trim();
		text?this.props.onAddClick(text):void 0;
		node.value = '';
	}
}

// console.log(PropTypes);

AddTodo.propTypes = {
	onAddClick: PropTypes.func.isRequired
}