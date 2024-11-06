import { Component } from 'react';
import PropTypes from 'prop-types';

type SectionProps = {
    title: string
}

export class Section extends Component {
	render() {
		const { title, children } = this.props;

		return (
			<section className={css.section}>
				<h2 className={css.title}>{title}</h2>
				{children}
			</section>
		);
	}
}

Section.propTypes = {
	title: PropTypes.string.isRequired,
};
