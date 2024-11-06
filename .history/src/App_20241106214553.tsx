import './App.css';
import { Component } from 'react';
import { Section } from './Section/Section';
import { Form } from './Form/Form';
  
export class App extends Component {
  render() {
    return (
      <div>
        <Section title="Phonebook">
          <Form />
        </Section>
      </div>
    );
  }
}

export {}