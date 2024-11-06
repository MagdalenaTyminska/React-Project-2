import { Component, ReactNode } from 'react';
import scss from './Section.module.scss';

type SectionProps = {
	title: string;
	children: ReactNode;
};

export class Section extends Component<SectionProps> {
	render() {
		const { title, children } = this.props;

		return (
			<section className={scss.section}>
				<h2 className={scss.section__title}>{title}</h2>
				{children}
			</section>
		);
	}
}
