import React, { Component } from 'react';
import todoapp from './reducers/index.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import App from './containers/App.jsx'

//console.log(reducer);

let store = createStore(todoapp);

render(
	<Provider store={ store }>
		<App />
	</Provider>,
	document.getElementById('root')
	)




