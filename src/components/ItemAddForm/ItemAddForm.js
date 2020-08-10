import React from 'react';

import './ItemAddForm.css';

const ItemAddForm = () => {
    return (
        <div className="d-flex my-2">
            <input placeholder="What needs to be done?" 
                className="form-control form-control-sm mr-1"/>
            <button type="submit" 
                className="btn btn-outline-secondary btn-sm">Add</button>
        </div>
    );
};

export default ItemAddForm;