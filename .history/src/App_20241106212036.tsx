import './App.css'
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/Form';

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

export default App
