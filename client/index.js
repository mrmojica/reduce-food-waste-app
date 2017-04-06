require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import Redux from 'redux';


const App = (<div>
	<h1>Food Tracker App</h1>
	<p>An app to help reduce food waste.</p>
	</div>
);


ReactDOM.render(App, document.getElementById('root'));