import React, { Component } from 'react';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newContact: '',
		};
	}

	handleInputChange = (event) => {
		this.setState({ newContact: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		if (this.state.newContact) {
			this.props.addContact(this.state.newContact);
			this.setState({ newContact: '' }); // Reset formularza po dodaniu kontaktu
		}
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input type='text' value={this.state.newContact} onChange={this.handleInputChange} placeholder='Enter contact' />
				<button type='submit'>Add Contact</button>
			</form>
		);
	}
}

export { Form };
