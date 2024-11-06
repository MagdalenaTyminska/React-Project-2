import { Component } from 'react';
import scss from './Input.module.scss';

type InputProps = {
	label: string;
	type: string;
	name: string;
	pattern: string;
	title: string;
	required: boolean;
	value: string;
	placeholder: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export class Input extends Component<InputProps> {
	render() {
		const { label, type, name, pattern, title, required, onChange, value, placeholder } = this.props;

		return (
			<>
				<label className={scss.label}>{label}</label>
				<input className={scss.input} type={type} name={name} pattern={pattern} title={title} required={required} onChange={onChange} value={value} placeholder={placeholder} />
			</>
		);
	}
}
