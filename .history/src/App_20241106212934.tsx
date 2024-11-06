import './App.css';
import { Section } from './Section/Section';
import { Form } from './Form/Form';

export class App extends Component  {

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

