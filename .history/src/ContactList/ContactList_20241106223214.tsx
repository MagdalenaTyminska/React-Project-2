import React, { Component } from 'react';

class ContactList extends Component {
	render() {
		const { contacts } = this.props;

		return (
			<ul>
				{contacts.map((contact, index) => (
					<li key={index}>{contact}</li>
				))}
			</ul>
		);
	}
}

export { ContactList };
