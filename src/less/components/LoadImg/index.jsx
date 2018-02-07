import React, { Component } from 'react'
import s from './index.less'

class LoadImg extends Component {
	render() {
		return <a>
			<div className = "s.LoadImg">
				<img src={ this.props.url } /> 
			</div>
			<p>{ this.props.text }</p>
		</a>
	}
}

export default LoadImg;