import { Component } from 'react';
import css from './InputField.module.css';

type InputProps = {
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export class InputField extends Component<InputProps> {
	render() {
		const { label, type, name, pattern, title, onChange, required } = this.props;

		return (
			<>
				<label className={css.contactFormLabel}>{label}</label>
				<input className={css.contactFormInput} type={type} name={name} pattern={pattern} title={title} required={required} onChange={onChange} />
			</>
		);
	}
}
