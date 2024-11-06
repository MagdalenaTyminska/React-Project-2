import { Component } from 'react';
import { Input } from './Input/Input';
import { nanoid } from 'nanoid';
import users from '../users.json';

interface Contact {
	id: string;
	name: string;
	number: string;
}

interface FormState {
	contacts: Contact[];
	name: string;
	number: string;
}

export class Form extends Component {
	state = {
		contacts: users,
		name: '',
		number: '',
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const { name, number, contacts } = this.state;

		if (contacts.some((contact) => contact.name === name)) {
			alert(`${name} is already in contacts.`);
			return;
		}

		const newContact = {
			id: nanoid(),
			name,
			number,
		};

		this.setState((prevState) => ({
			contacts: [...prevState.contacts, newContact],
			name: '',
			number: '',
		}));
	};

	render() {
		const { name, number } = this.state;

		return (
			<>
				<form onSubmit={this.handleSubmit}>
					<Input
						label='Name'
						type='text'
						name='name'
						pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
						title='Name may contain only letters, apostrophe, dash and spaces.'
						required
						value={name}
						onChange={this.handleChange}
					/>
					<Input
						label='Number'
						type='tel'
						name='number'
						pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
						title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
						required
						value={number}
						onChange={this.handleChange}
					/>
					<button type='submit'>Add contact</button>
				</form>

				<h2>Contacts</h2>
				<ul>
					{this.state.contacts.map((contact) => (
						<li key={contact.id}>
							{contact.name}: {contact.number}
						</li>
					))}
				</ul>
			</>
		);
	}
}
