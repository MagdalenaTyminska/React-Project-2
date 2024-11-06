import './App.css';
import { Section } from './Section/Section';
import { Form } from './Form/Form';

export class App extends Component  {

   state = {
			contacts: users, // ustawienie stanu na dane z pliku JSON
			filter: '',
   };
  
export class App extends Component {
  render() {
    return (
      <div className={css.boxApp}>
        <Section title="Phonebook">
          <ContactForm />
        </Section>
      </div>
    );
  }
}
