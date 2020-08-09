import React from 'react';

import './app-header.css';

const AppHeader = () => {
	return 	(
		<div className="d-flex justify-content-between app-header">
			<h1>Todo List</h1>
			<h2>* more to do, * done</h2>
		</div>
	);
};

export default AppHeader;