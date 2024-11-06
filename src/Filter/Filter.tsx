import React, { Component } from 'react';
import scss from './Filter.module.scss';

interface FilterProps {
	filter: string;
	handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export class Filter extends Component<FilterProps> {
	render() {
		const { filter, handleSearch } = this.props;
		return (
			<>
				<p className={scss.filterTitle}>Find contacts by name or phone number</p>
				<input className={scss.filterInput} type='text' value={filter} onChange={handleSearch} placeholder='Search contacts...' />
			</>
		);
	}
}
