import './App.css';
import users from './users.json';
import { Section } from './Section/Section';
import { Form } from './Form/Form';

function App() {
	return (
		<>
			<div>
				<Section title='Phonebook'>
					<Form onSubmit={this.handleSubmit} />
				</Section>
			</div>
		</>
	);
}

export default App;
