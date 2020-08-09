import React from 'react';

import './item-status-filter.css';

const ItemStatusFilter = () => {
    return (
        <div className="btn-group">
            <button className="btn btn-primary btn-sm">All</button>
            <button className="btn btn-outline-secondary btn-sm">Active</button>
            <button className="btn btn-outline-secondary btn-sm">Done</button>
        </div>
    );
};

export default ItemStatusFilter;