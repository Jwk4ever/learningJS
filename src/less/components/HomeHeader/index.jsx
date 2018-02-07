import React, { Component } from 'react'
import s from './index.less'

//console.log(s);

class HomeHeader extends Component{
	render() {
		return <div className = { s.container }>
			<div className = { s.addr }>
				<div className = { s.ellipsis }>定位中...</div>
			</div>
			<div className = { s.search }>
				<div>
					<input disabled readOnly placeholder="测试测试测试测试测试测试测试测试测试" />
				</div>
			</div>
		</div>
	}
}


export default HomeHeader
