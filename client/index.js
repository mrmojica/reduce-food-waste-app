require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import Redux from 'redux';
import Login from './components/login'


const App = (<div>
	<h1>Food Tracker App</h1>
	<p>An app to help reduce food waste.</p>
	<Login />
	</div>
);


ReactDOM.render(App, document.getElementById('root'));