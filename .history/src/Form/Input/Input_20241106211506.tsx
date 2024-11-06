import { Component } from 'react';

type InputProps = {
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export class Input extends Component<InputProps> {
	render() {
		const { label, type, name, pattern, title, onChange, required } = this.props;

		return (
			<>
				<label >{label}</label>
				<input className={css.contactFormInput} type={type} name={name} pattern={pattern} title={title} required={required} onChange={onChange} />
			</>
		);
	}
}
