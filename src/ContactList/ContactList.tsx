import { Component } from 'react';
import scss from './ContactList.module.scss';

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
			<ul className={scss.list}>
				{contacts.map((contact) => (
					<li key={contact.id}>
						{contact.name} - {contact.number}
						<button className={scss.list__button} onClick={() => onRemove(contact.id)}>
							Delete
						</button>
					</li>
				))}
			</ul>
		);
	}
}

export { ContactList };
