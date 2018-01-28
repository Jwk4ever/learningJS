import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import App from './containers/App'
import todoApp from './reducers/reducers'


let root = document.getElementById('root');

let store = createStore(todoApp);

console.log(store);

render(
	<Provider store = { store }>
		<App />
	</Provider>
		,
	root
)


