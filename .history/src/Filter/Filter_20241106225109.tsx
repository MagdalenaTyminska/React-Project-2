import React, { Component } from 'react';

interface FilterProps {
	filter: string;
	handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export class Filter extends Component<FilterProps> {
	render() {
		const { filter, handleSearch } = this.props;
		return (
			<>
				<p >Find contacts by name</p>
				<input className={css.filterInput} type='text' value={filter} onChange={handleSearch} placeholder='Search contacts...' />
			</>
		);
	}
}
