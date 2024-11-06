import { Component } from 'react';

interface Contact {
	id: string;
	name: string;
	number: string;
}

interface ContactListProps {
	contacts: Contact[];
	onRemove: (id: string) => void;
}

class ContactList extends Component<ContactListProps> {
	render() {
		const { contacts, onRemove } = this.props;

		return (
			<ul>
				{contacts.map((contact) => (
					<li key={contact.id}>
						{contact.name} - {contact.number}
						<button onClick={() => onRemove(contact.id)}>Delete</button>
					</li>
				))}
			</ul>
		);
	}
}

export { ContactList };
