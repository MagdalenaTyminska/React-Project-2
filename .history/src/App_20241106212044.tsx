import './App.css';
import { Section } from './Section/Section';
import { Form } from './Form/Form';

function App() {
	return (
		<>
			<div className={css.boxApp}>
				<Section title='Phonebook'>
					<Form onSubmit={this.handleSubmit} />
				</Section>
			</div>
		</>
	);
}

export default App;
