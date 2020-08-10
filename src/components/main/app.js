import React from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import ItemStatusFilter from '../ItemStatusFilter';
import TodoList from '../TodoList';
import ItemAddForm from '../ItemAddForm';
import './App.css';

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