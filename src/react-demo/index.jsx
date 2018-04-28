import React, { Component } from 'react';
import todoapp from './reducers/index.js';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import App from './containers/App.jsx'

const logger = state => next => action => {
	console.log(action.type);
	next(action);
	console.log(state.getState());
}

let store = createStore(todoapp, applyMiddleware(
	logger
));

render(
	<Provider store={ store }>
		<App />
	</Provider>,
	document.getElementById('root')
	)




