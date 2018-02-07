import React, { Component } from 'react'
import Linewrap from '../Linewarp/index.jsx'
import s from './index.less'

class KingKong extends Component{
	render() {
		let urls = [{ 
			url : "https://p1.meituan.net/jungle/4f6fef875364c9ace258e09d9332b07412396.jpg",
			text : "美食"
		},{
			url : "https://p1.meituan.net/jungle/e90570e9416a8da7b5bc02f20187ac0111811.jpg",
			text : "快餐小食"
		},{
			url : "https://p1.meituan.net/jungle/e90570e9416a8da7b5bc02f20187ac0111811.jpg",
			text : "汉堡披萨"
		},{
			url : "https://p0.meituan.net/jungle/7ed9aa480436e03b16215967dea1fd0114664.jpg",
			text : "好吃不贵"
		},{
			url : "https://p0.meituan.net/jungle/0a31ccb58b513c663d8ad2ba511789d35998.png",
			text : "好吃不贵"
		},{
			url : "https://p0.meituan.net/jungle/7a45acc20c6f79ff0b1e839a9526884913614.jpg",
			text : "甜点饮品"
		},{
			url : "https://p0.meituan.net/jungle/1e770413d1657ebb17df72caccf80af711371.jpg",
			text : "炸鸡熟食"
		},{
			url : "https://p1.meituan.net/jungle/7ef318db46deb9554c4db2d36e6472e012201.jpg",
			text : "暖胃粉面"
		},{
			url : "https://p1.meituan.net/jungle/5b89cc5b0e42777712083f978068a1d412602.jpg",
			text : "商超生鲜"
		},{
			url : "https://p0.meituan.net/jungle/bc7168b93d3a5f894c17da7bd90a8d5414125.jpg",
			text : "正餐优选"
		},{
			url : "https://p0.meituan.net/codeman/b5fe91bf1b555e1c36793e91f332babf3846.png",
			text : "一键下单"
		}];
		return <div className = { s.container } >
			<Linewrap imgurls = { urls.slice(0,5) } />
			<Linewrap imgurls = { urls.slice(5) } />
		</div>
	}
}


export default KingKong;
