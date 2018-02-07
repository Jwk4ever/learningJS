import React, { Component } from 'react'
import LoadImg from '../LoadImg/index.jsx'
import s from './index.less'

class Linewarp extends Component{
	render() {
		const urls = this.props.imgurls;
		return <div className = { s.container }>{
			urls.map((ele, key) => {
			return <LoadImg  key = { key } url = { ele.url } text = { ele.text } />
		})}
		</div>
	}
}

export default Linewarp;