import React, { Component } from 'react';

interface Contact {
	id: string;
	name: string;
	number: string;
}

interface ContactListProps {
	contacts: Contact[];
}

class ContactList extends Component<ContactListProps> {
	render() {
		const { contacts } = this.props;

		return (
			<ul>
				{contacts.map((contact) => (
					<li key={contact.id}>
						{contact.name} - {contact.number}
					</li>
				))}
			</ul>
		);
	}
}

export { ContactList };
