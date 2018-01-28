import React, { Component, PropTypes } from 'react'

export default class Footer extends Component {
	render() {
		return (
			<p>
				Show:
				{' '}
				{ this.renderFilter('SHOW_ALL','All')}
				{','}
				{ this.renderFilter('SHOW_COMPLETED','COMPLETED') }
				{','}
				{ this.renderFilter('SHOW_ACTIVE','ACTIVE') }
				.
			</p>
		)
	}

	renderFilter(filter, name) {
		if( filter === this.props.name ){
			return name
		}

		return (
			<a href = '#' onClick = { e => {
				e.preventDefault();
				this.props.onFilterChange(filter);
			}}>{ name }</a>
		)
	}
}

// Footer.propTypes = {
// 	onFilterChange: PropTypes.func.isRequired,
// 	name: PropTypes.oneOf([
// 		'SHOW_ALL',
// 		'SHOW_ACTIVE',
// 		'SHOW_COMPLETED'
// 	]).isRequired
// }