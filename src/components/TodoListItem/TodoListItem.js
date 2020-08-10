import React from 'react';

import './TodoListItem.css';

const TodoListItem = ({ label, important = false }) => {
    const style = {
        color: important ? 'tomato' : 'black'
    };

    return (
        <div className="todo-list-item">
            <span style={style}>{label}</span>
            <button type="button"
                className="btn btn-outline-success btn-sm float-right">
                <i className="fa fa-exclamation" />
            </button>
            <button type="button"
                className="btn btn-outline-danger btn-sm float-right">
                <i className="fa fa-trash-o" />
            </button>

        </div>
    );
};

export default TodoListItem;