import { Component, ReactNode } from 'react';
import PropTypes from 'prop-types';

type SectionProps = {
	title: string;
	children: ReactNode;
};

export class Section extends Component {
	render() {
		const { title, children } = this.props;

		return (
			<section>
				<h2>{title}</h2>
				{children}
			</section>
		);
	}
}

Section.propTypes = {
	title: PropTypes.string.isRequired,
};
