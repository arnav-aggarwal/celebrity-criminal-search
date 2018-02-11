import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';
import './less/base.less';

// if(window.FirebasePlugin) {
// 	window.FirebasePlugin.onNotificationOpen(notification => {
// 		notification = {
// 			content: notification.content,
// 			title: notification.title
// 		};
// 		console.log()
// 	});
// }

ReactDOM.render(
	<div>
		<Home />
		<div id="footer">
			Copyright &copy; CelebCrimes All Right Reserved
		</div>
	</div>,
	document.getElementById('app')
);
