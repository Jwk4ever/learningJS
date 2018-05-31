<<<<<<< HEAD
import React, { Component } from 'react'
import { render } from 'react-dom'
import { 
	BrowserRouter,
	Link,
	Switch,
	Route,
 } from 'react-router-dom'

// class App extends Component {
// 	constructor (props){
// 		super(props);
// 		this.onClick = this.onClick.bind(this);
// 		this.state = {
// 			counter: 0
// 		}
// 	}
// 	onClick (){
// 		//e.preventDefault();
// 		this.setState((prevState, nextProps) => {
// 			console.trace('setState');
// 			return {
// 				counter: prevState.counter + 1
// 			}
// 		})
// 	}
// 	render() {
// 		console.trace('render App')
// 		return (<div>
// 			<Counter counter = {this.state.counter}/>
// 			<Button onClick = {this.onClick}/>
// 		</div>)
// 	}
// }

// class Counter extends Component {
// 	constructor (props){
// 		super(props);
// 		//console.log('Counter constructor');
// 	}
// 	static getDerivedStateFromProps() {
// 		//console.log('Counter getDerivedStateFromProps');
// 	}
// 	componentWillMount (){
// 		//console.log('Counter componentWillMount');
// 	}
// 	componentDidMount (){
// 		//console.trace('Counter componentDidMount');
// 	}
// 	shouldComponentUpdate (){
// 		//console.trace('Counter shouldComponentUpdate');
// 		return true;
// 	}
// 	componentWillReceiveProps (){
// 		//console.log('Counter componentWillRecceiveProps');
// 	}
// 	getSnapshotBeforeUpdate (){
// 		//console.log('Counter getSnapshotBeforeUpdate');
// 	}
// 	componentDidUpdate (){
// 		//console.trace('Counter ComponentDidUpdate');
// 	}
// 	render() {
// 		console.trace('render Counter');
// 		return (<div
// 				style = {{ height:'30px', background: 'skyblue'}}
// 			>
// 				{this.props.counter}
// 			</div>)
// 	}
// }

// class Button extends Component {
// 	constructor (props){
// 		super(props);
// 		this.clickhandler = this.clickhandler.bind(this);
// 	}
// 	clickhandler (e){
// 		e.preventDefault();
// 		this.props.onClick();
// 	}
// 	static getDerivedStateFromProps() {
// 		// console.log('Button getDerivedStateFromProps');
// 	}
// 	componentWillMount (){
// 		// console.log('Button componentWillMount');
// 	}
// 	componentDidMount (){
// 		// console.trace('Button componentDidMount');
// 	}
// 	shouldComponentUpdate (){
// 		// console.log('Button shouldComponentUpdate');
// 		return true;
// 	}
// 	componentWillReceiveProps (){
// 		// console.log('Button componentWillRecceiveProps');
// 	}
// 	getSnapshotBeforeUpdate (){
// 		// console.log('Button getSnapshotBeforeUpdate');
// 	}
// 	componentDidUpdate (){
// 		// console.log('Button ComponentDidUpdate');
// 	}
// 	render (){
// 		console.log('render Button');
// 		return (<button
// 				onClick = {this.clickhandler}
// 			>点击</button>)
// 	}
// }

// class Test extends Component {
// 	render (){
// 		console.trace("test");
// 		return <div>{'test'}</div>
// 	}
// }
const Schedule = () => <div>Schedule</div>

const Roster = () => <div>Roster</div>

const Home = () => <div>Home</div>

const Content = () => (<div>
		<Route exact path="/" component={Home} />
		<Route path="/roster" component={Roster} />
		<Route path="/schedule" component={Schedule} />
</div>)

const Header = () => (<nav>
	<ul>
		<li><Link to='/'>HOME</Link></li>
		<li><Link to='/roster'>ROSTER</Link></li>
		<li><Link to='/schedule'>SCHEDULE</Link></li>
	</ul>
</nav>)

const App = () => (<div>
	<Header />
	<Content />
</div>)

render(
	<BrowserRouter>
		<App/>
	</BrowserRouter>,
	document.getElementById('app')
	);
=======
import { wait } from '../utils';

class A {
	@loading
	async get (){
		let result = await wait();
		console.log(result);
	}
	// @loading
	// sayName (){
	// 	console.log('test');
	// }
}

// function loading(target, name, descriptor){
// 	let _val = descriptor.value;
// 	return descriptor;
// }

function loading(target, name, descriptor){
	let _val = descriptor.value;
	_val(); 
	return descriptor;
}

let a = new A();

a.sayName();
>>>>>>> parent of 4dcd4a8... 添加 throttle 函数


var a = new Promise((resolve) => {
	resolve({a: 1});
})

<<<<<<< HEAD


=======
a.then((val) => {
	console.log(val.a);
})
>>>>>>> parent of 4dcd4a8... 添加 throttle 函数
