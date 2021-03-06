import React, { Component} from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import ItemStatusFilter from '../ItemStatusFilter';
import TodoList from '../TodoList';
import ItemAddForm from '../ItemAddForm';
import './App.css';

export default class App extends Component {
	constructor() {
		super();
		
		this.state = {
			todos: [
				{ label: 'Drink Coffee', important: false, done: false, id: 1 },
				{ label: 'Build Todo App', important: true, done: false, id: 2 },
				{ label: 'Have a lunch', important: false, done: true, id: 3 }
			],
			search: '',
			filter: 'all'
		};

		this.onToggleImportant = this.onToggleImportant.bind(this);
		this.onToggleDone = this.onToggleDone.bind(this);
		this.onDeleteTodo = this.onDeleteTodo.bind(this);
		this.createTodo = this.createTodo.bind(this);
		this.onAddTodo = this.onAddTodo.bind(this);
		this.onSearchChange = this.onSearchChange.bind(this);
		this.onFilterChange = this.onFilterChange.bind(this);
	}

	// toggle boolean property by id in array 
	toggleProperty(arr, id, propName) {
		const ind = arr.findIndex(item => item.id === id);
		const oldItem = arr[ind];
		const newItem = {...oldItem, [propName]: !oldItem[propName]};
		return [
			...arr.slice(0, ind), 
			newItem, 
			...arr.slice(ind + 1)
		];
	}

	onToggleImportant(id) {
		this.setState((state) => {
			const {todos} = state;
			const newTodos = this.toggleProperty(todos, id, 'important');
			return { todos: newTodos };
		});	
	}

	onToggleDone(id) {
		this.setState((state) => {
			const {todos} = state;
			const newTodos = this.toggleProperty(todos, id, 'done');
			return { todos: newTodos };
		});
	}

	onDeleteTodo(id) {
		this.setState((state) => {
			const {todos} = state;
			const todoInd = todos.findIndex(todo => todo.id ===id);
			return {
				todos: [
					...todos.slice(0, todoInd),
					...todos.slice(todoInd + 1)
				]
			};
		});
	}

	createTodo(label) {
		return {
			id: this.state.todos.length + 1,
			label: label,
			important: false,
			done: false
		};
	}

	onAddTodo(label) {
		this.setState(state => {
			const newTodo = this.createTodo(label);
			return ({
				todos: [
					...state.todos,
					newTodo
				]
			});
		});
	}

	onSearchChange(search) {
		this.setState({ search });
	}

	onFilterChange(filter) {
		this.setState({ filter });
	}

	searchTodos(todos, search){
		if (search.length === 0)
			return todos;	

		return todos.filter(todo => todo.label.toLowerCase().indexOf(search.toLowerCase()) > -1);
	}

	filterTodos(todos, filter){
		switch(filter){
			case 'all':
				return todos;
			case 'active':
				return todos.filter(todo => !todo.done);
			case 'done':
				return todos.filter(todo => todo.done);
			default:
				return todos;
		}
	}

	render() {
		const { todos, search, filter } = this.state;
		const doneCnt = todos.filter(todo => todo.done).length;
		const todoCnt = todos.length - doneCnt;
		const visibleTodos = this.filterTodos(this.searchTodos(todos, search), filter);
		return (	
			<div className="todo-app">
				<AppHeader todoCnt={todoCnt} doneCnt={doneCnt} />
				<div className="d-flex my-2">
					<SearchPanel onSearchChange={this.onSearchChange}/>
					<ItemStatusFilter filter={filter} onFilterChange={this.onFilterChange} />
				</div>
				<TodoList 
					todos={visibleTodos} 
					onToggleImportant={this.onToggleImportant}
					onToggleDone={this.onToggleDone}
					onDeleteTodo={this.onDeleteTodo}
				/>
				<ItemAddForm onAddTodo={this.onAddTodo}/>
			</div>
		);
	}
};