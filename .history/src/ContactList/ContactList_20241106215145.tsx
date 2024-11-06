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

export class ContactList extends Component<{}, ContactListProps> {
	render() {
		const { filter, contacts, handleRemove } = this.props;
		return (
			<>
				<ul className={css.list}>
					{contacts
						.filter((contact) => {
							if (!filter) {
								return true;
							}
							const lowerName = contact.name.toLowerCase();
							const lowerFilter = filter.toLowerCase();
							return lowerName.includes(lowerFilter);
						})
						.map((contact) => (
							<li key={contact.id}>
								{contact.name}: {contact.number}
								<button className={css.contactListButton} id={contact.id} type='button' onClick={handleRemove}>
									{' '}
									Delete{' '}
								</button>
							</li>
						))}
				</ul>
			</>
		);
	}
}
