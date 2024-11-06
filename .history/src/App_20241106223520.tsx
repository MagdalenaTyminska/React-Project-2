import './App.css';
import { Component } from 'react';
import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import usersData from './users.json'; 

// Typ kontaktu z nową strukturą
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
			contacts: usersData, // Załaduj początkowe dane z JSON
		};
	}

	// Funkcja do dodawania nowego kontaktu
	addContact = (newContact: Contact) => {
		this.setState((prevState) => ({
			contacts: [...prevState.contacts, newContact],
		}));
	};

	render() {
		return (
			<div>
				<Section title='Phonebook'>
					<Form addContact={this.addContact} />
				</Section>
				<Section title='Contacts'>
					<ContactList contacts={this.state.contacts} />
				</Section>
			</div>
		);
	}
}

export { App };
