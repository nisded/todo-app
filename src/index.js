import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import ItemStatusFilter from './components/item-status-filter';
import TodoList from './components/todo-list';
import ItemAddForm from './components/item-add-form';
import './index.css';

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

ReactDOM.render(<App />, document.getElementById('root'));