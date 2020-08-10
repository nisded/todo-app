import React from 'react';

import './TodoListItem.css';

const TodoListItem = ({ label, important, done,
                        onToggleImportant, onToggleDone, onDeleteItem}) => {
    let classNames = "todo-list-item";
    if (important)
        classNames += " important";
    if (done)
        classNames += " done";

    return (
        <div className={classNames}>
            <span 
                className="todo-list-item-label"
                onClick={onToggleDone}
            >
                {label}
            </span>
            <button 
                type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={onToggleImportant}
            >
                <i className="fa fa-exclamation" />
            </button>
            <button 
                type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onDeleteItem}
            >
                <i className="fa fa-trash-o" />
            </button>

        </div>
    );
};

export default TodoListItem;