import { Component } from 'react';

interface Contact {
	id: string;
	name: string;
	number: string;
}

type ContactListProps = {
	contacts: Contact[];
};

export class ContactList extends Component<ContactListProps> {
	render() {
		const { contacts } = this.props;

		return (
			<>
				<h2>Contacts</h2>
				<ul>
					{contacts.map((contact) => (
						<li key={contact.id}>
							{contact.name}: {contact.number}
						</li>
					))}
				</ul>
			</>
		);
	}
}
