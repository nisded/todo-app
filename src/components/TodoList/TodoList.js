import React from 'react';

import TodoListItem from '../TodoListItem';
import './TodoList.css';

const TodoList = ({ todos, onToggleImportant, onToggleDone, onDeleteTodo }) => {
    const items = todos.map((item) => {
        const {id, ...itemProps} = item;

        return (
            <li key={id} className="list-group-item">
                <TodoListItem 
                    {...itemProps} 
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleDone={() => onToggleDone(id)}
                    onDeleteItem={() => onDeleteTodo(id)}
                />
            </li>
        );
    });

	return (
		<ul className="list-group todo-list">
			{items}
		</ul>
	);
};

export default TodoList;