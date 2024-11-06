import './App.css';
import { Component } from 'react';
import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';

class App extends Component {
	render() {
		return (
			<div>
				<Section title='Phonebook'>
					<Form />
				</Section>
				{/* <Section title='Contacts'>
					<ContactList />
				</Section> */}
			</div>
		);
	}
}

export { App };
