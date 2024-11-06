import './App.css';
import { Component } from 'react';
import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter';
import usersData from './users.json';

interface Contact {
	id: string;
	name: string;
	number: string;
}

interface AppState {
	contacts: Contact[];
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
		return (
			<div>
				<Section title='Phonebook'>
					<Form addContact={this.addContact} />
				</Section>
				<Section title='Contacts'>
					<Filter handleSearch={this.handleSearch} filter={this.state.filter} />
					<ContactList contacts={this.state.contacts} />
				</Section>
			</div>
		);
	}
}

export { App };
