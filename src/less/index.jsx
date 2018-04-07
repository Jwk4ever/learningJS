import React, { Component } from 'react'
import { render } from 'react-dom'

import HomeHeader from './components/HomeHeader/index.jsx'
import Banner from './components/Banner/index.jsx'
import KingKong from './components/KingKong/index.jsx'
import Tile from './components/Tile/index.jsx'
import ShoplistFilter from './components/ShoplistFilter/index.jsx'
import Shoplist from './components/Shoplist/index.jsx'
import Footer from './components/Footer/index.jsx'

import s from './index.less'

import data from '../../mock/mock.js'
import { get } from '../utils'

class HomePage extends Component{
	componentDidMount() {
		get('http://g.cn').then((result)=>{
			console.log(result);
		});
	}
	render() {
		return <div className = {s.global}>
			<HomeHeader />
			<KingKong />
			<Banner />
			<Tile />
			<div className = { s.title }>附近商家</div>
			<ShoplistFilter />
			<Shoplist />
			<Footer />
		</div>
	}
}

let root = document.getElementById('root');


render(<HomePage />, root);