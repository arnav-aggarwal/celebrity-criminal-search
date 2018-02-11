import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';
import './less/base.less';

ReactDOM.render(
	<div id="mobile-container">
		<div id="logo">CelebCrimes</div>
		<div id="content">
			<Home />
		</div>
		<div id="footer">
			Copyright &copy; CelebCrimes All Right Reserved
		</div>
	</div>,
	document.getElementById('app')
);
