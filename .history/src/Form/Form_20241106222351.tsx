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
	name: string;
	number: string;
}

interface FormProps {
	addContact: (newContact: Contact) => void;
}

export class Form extends Component<FormProps, FormState> {
	state: FormState = {
		name: '',
		number: '',
	};

	handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const { name, value } = event.target;
		this.setState({
			[name]: value,
		} as Pick<FormState, 'name' | 'number'>);
	};

	handleSubmit = (event: React.FormEvent): void => {
		event.preventDefault();
		const { name, number } = this.state;

		const newContact: Contact = {
			id: nanoid(),
			name,
			number,
		};

		// Przekazujemy nowy kontakt do App
		this.props.addContact(newContact);

		this.setState({
			name: '',
			number: '',
		});
	};

	render() {
		const { name, number } = this.state;

		return (
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
		);
	}
}
