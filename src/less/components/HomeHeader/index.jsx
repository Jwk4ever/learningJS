import React, { Component } from 'react'
import s from './index.less'

console.log(s);

class HomeHeader extends Component{
	render() {
		return <div className = { s.container }>
			<div className = { s.location }></div>
			<div className = { s.foodinput }>
				<input className = {s.input } />
			</div>
		</div>
	}
}


export default HomeHeader
