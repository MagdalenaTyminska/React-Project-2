import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import scss from './Form.module.scss';
import { Input } from './Input/Input';

interface FormProps {
	addContact: (newContact: { id: string; name: string; number: string }) => void;
}

interface FormState {
	name: string;
	number: string;
}

class Form extends Component<FormProps, FormState> {
	constructor(props: FormProps) {
		super(props);
		this.state = {
			name: '',
			number: '',
		};
	}

	handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		this.setState((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		const { name, number } = this.state;
		if (name && number) {
			const newContact = {
				id: nanoid(),
				name,
				number,
			};
			this.props.addContact(newContact);
			this.setState({ name: '', number: '' });
		}
	};

	render() {
		return (
			<form className={scss.form} onSubmit={this.handleSubmit}>
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
					onChange={this.handleInputChange}
					value={this.state.name}
					placeholder='name'
				/>
				<Input
					label='number'
					type='tel'
					name='number'
					pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
					title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
					required={true}
					onChange={this.handleInputChange}
					value={this.state.number}
					placeholder='phone'
				/>
				<button className={scss.form__button} type='submit'>
					Add Contact
				</button>
			</form>
		);
	}
}

export { Form };
