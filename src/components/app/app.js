import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';
import './app.css';

const todoData = [
	{ label: 'Drink Coffee', important: false, id: 1 },
	{ label: 'Build React App', important: true, id: 2 },
	{ label: 'Have a lunch', important: false, id: 3 }
];

const App = () => {
	return(
		<div className="todo-app">
			<AppHeader />
			<div className="d-flex my-2">
				<SearchPanel />
				<ItemStatusFilter />
			</div>
			<TodoList todos={todoData} />
			<ItemAddForm />
		</div>
	);	
};

export default App;