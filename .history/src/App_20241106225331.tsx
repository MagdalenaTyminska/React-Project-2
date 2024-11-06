import './App.css';
import { Component } from 'react';
import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import usersData from './users.json';

interface Contact {
	id: string;
	name: string;
	number: string;
}

interface AppState {
	contacts: Contact[];
	filter: string;
}

class App extends Component<{}, AppState> {
	constructor(props: {}) {
		super(props);
		this.state = {
			contacts: usersData,
			filter: '',
		};
	}

	addContact = (newContact: Contact) => {
		this.setState((prevState) => ({
			contacts: [...prevState.contacts, newContact],
		}));
	};

	handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		this.setState({ filter: value });
	};

	handleRemove = (id: string) => {
		this.setState((prevState) => ({
			contacts: prevState.contacts.filter((contact) => contact.id !== id),
		}));
	};

	render() {
		const { contacts, filter } = this.state;
		const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));

		return (
			<div>
				<Section title='Phonebook'>
					<Form addContact={this.addContact} />
				</Section>
				<Section title='Contacts'>
					<Filter handleSearch={this.handleSearch} filter={filter} />
					<ContactList contacts={filteredContacts} onRemove={this.handleRemove} />
				</Section>
			</div>
		);
	}
}

export { App };
