import { Component } from 'react';

type InputProps = {
	label: string;
	type: string;
	name: string;
	pattern: string;
	title: string;
	required: boolean;
	value: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export class Input extends Component<InputProps> {
	render() {
		const { label, type, name, pattern, title, required, onChange, value } = this.props;

		return (
			<>
				<label>{label}</label>
				<input type={type} name={name} pattern={pattern} title={title} required={required} onChange={onChange} />
			</>
		);
	}
}
