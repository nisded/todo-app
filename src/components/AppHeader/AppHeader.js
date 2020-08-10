import React from 'react';

import './AppHeader.css';

const AppHeader = ({ todoCnt, doneCnt }) => {
	return 	(
		<div className="d-flex justify-content-between app-header">
			<h1>Todo List</h1>
			<h2>{todoCnt} more to do, {doneCnt} done</h2>
		</div>
	);
};

export default AppHeader;