import React from 'react';

import './ItemStatusFilter.css';

const filterButtons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' }
];

const ItemStatusFilter = ({ filter, onFilterChange }) => {
    const buttons = filterButtons.map(({ name, label }) => {
        const isActive = name === filter;
        const classNames = "btn " + (isActive ? "btn-primary" : "btn-outline-secondary") + " btn-sm";
        return (
            <button 
                type="button" 
                key={name}
                className={classNames}
                onClick={() => onFilterChange(name)}
            >
                {label}
            </button>
        );
    });

    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
};

export default ItemStatusFilter;