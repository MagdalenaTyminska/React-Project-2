import { Component } from 'react';
import { Input } from './Input/Input';
import { nanoid } from 'nanoid';
import users from '../users.json';


export class Form extends Component {
	state = {
		contacts: users, // Inicjalizacja kontaktów z pliku JSON
		name: '',
		number: '',
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		const { name, number } = this.state;
		const { onSubmit } = this.props;

		return (
			<form onSubmit={(event) => onSubmit({ event, name, number })}>
				<Input
					label='name'
					type='text'
					name='name'
					pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я
                ])?[a-zA-Zа-яА-Я]*)*$"
					title="Name may contain only letters,
                apostrophe, dash and spaces. For example Adrian, Jacob Mercer,
                Charles de Batz de Castelmore d'Artagnan"
					required={true}
					onChange={this.handleChange}
				/>
				<Input
					label='number'
					type='tel'
					name='number'
					pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
					title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
					required={true}
					onChange={this.handleChange}
				/>
				<button type='submit'>Add contact</button>
			</form>
		);
	}
}
