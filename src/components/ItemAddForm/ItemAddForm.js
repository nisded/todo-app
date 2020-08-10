import React, { Component } from 'react';

import './ItemAddForm.css';

export default class ItemAddForm extends Component {
    constructor() {
        super();

        this.state = {
            label: ''
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onLabelChange = this.onLabelChange.bind(this);
    }

    onLabelChange(e) {
        this.setState({
            label: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const { label } = this.state;
        this.props.onAddTodo(label);
        this.setState({
            label: ''
        });
    }

    render(){
        return (
            <form onSubmit={this.onSubmit} className="d-flex my-2">
                <input 
                    type="text" 
                    placeholder="What needs to be done?" 
                    className="form-control form-control-sm mr-1"
                    onChange={this.onLabelChange}
                    value={this.state.label}
                />
                <button 
                    type="submit" 
                    className="btn btn-outline-secondary btn-sm"
                >
                    Add
                </button>
            </form>
        );
    }
};

