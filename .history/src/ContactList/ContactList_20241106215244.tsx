import { Component } from 'react';
import css from './ContactList.module.css';

interface Contact {
	id: string;
	name: string;
	number: string;
}

interface ContactListProps {
	contacts: Contact[];
}

export class ContactList extends Component<ContactListProps> {
	render() {
		const { contacts } = this.props;

		return (
			<ul>
				{contacts.map((contact) => (
					<li key={contact.id}>
						{contact.name}: {contact.number}
					</li>
				))}
			</ul>
		);
	}
}