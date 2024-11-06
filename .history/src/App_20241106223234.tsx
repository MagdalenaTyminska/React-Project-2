import './App.css';
import { Component } from 'react';
import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contacts: [], // Początkowo lista kontaktów jest pusta
		};
	}

	// Funkcja do dodawania nowego kontaktu
	addContact = (newContact) => {
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
