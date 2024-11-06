import './App.css';
import users from './users.json';
import { Section } from './Section/Section';
import { Form } from './Form/Form';

function App() {

   state = {
			contacts: users, // ustawienie stanu na dane z pliku JSON
			filter: '',
   };
  
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
