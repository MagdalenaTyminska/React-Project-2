import './App.css';
import { Component } from 'react';
import { Section } from './Section/Section';
import { Form } from './Form/Form';

class App extends Component {
	render() {
		return (
			<div>
				<Section title='Phonebook'>
					<Form />
				</Section>
				<Section title='Contacts'>
					<Filter handleSearch={this.handleSearch} filter={this.state.filter} />
					<ContactList handleRemove={this.handleRemove} contacts={this.state.contacts} filter={this.state.filter} />
				</Section>
			</div>
		);
	}
}

export { App };
