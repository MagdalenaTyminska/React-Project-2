import { Component } from 'react';

type InputProps = {
	const { label, type, name, pattern, title, required, onChange, value } = this.props;
};

export class Input extends Component<InputProps> {
	render() {
		const { label, type, name, pattern, title, onChange, required } = this.props;

		return (
			<>
				<label>{label}</label>
				<input type={type} name={name} pattern={pattern} title={title} required={required} onChange={onChange} />
			</>
		);
	}
}
