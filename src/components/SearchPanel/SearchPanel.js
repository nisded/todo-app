import React, { Component } from 'react';

import './SearchPanel.css';

export default class SearchPanel extends Component {
	constructor() {
		super();

		this.state = {
			searchInput: ''
		};

		this.onSearchInputChange = this.onSearchInputChange.bind(this);
	}

	onSearchInputChange(e) {
		this.setState({
			searchInput: e.target.value
		});

		this.props.onSearchChange(e.target.value);
	}

	render() {
		return (
			<input 
				placeholder="type to search" 
				className="form-control form-control-sm search-panel"
				onChange={this.onSearchInputChange}
				value={this.state.searchInput}
			/>
		);
	}
};