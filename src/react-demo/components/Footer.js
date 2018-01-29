import React ,{ Component }from 'react'
import PropTypes from 'prop-types'

export default class Footer extends Component {
	render() {
		return (
			<p>
				Show:
				{' '}
				{ this.renderFilter('SHOW_ALL','All')}
				{', '}
				{ this.renderFilter('SHOW_COMPLETED','COMPLETED') }
				{', '}
				{ this.renderFilter('SHOW_ACTIVE','ACTIVE') }
				.
			</p>
		)
	}

	renderFilter(filter, name) {
		if( filter === this.props.filter ){
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

Footer.propTypes = {
	onFilterChange: PropTypes.func.isRequired,
	filter: PropTypes.oneOf([
		'SHOW_ALL',
		'SHOW_ACTIVE',
		'SHOW_COMPLETED'
	]).isRequired
}