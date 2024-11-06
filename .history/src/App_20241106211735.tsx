import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
		<>
			<div className={css.boxApp}>
				<Section title='Phonebook'>
					<ContactForm onSubmit={this.handleSubmit} />
				</Section>
				<Section title='Contacts'>
					<Filter handleSearch={this.handleSearch} filter={this.state.filter} />
					<ContactList handleRemove={this.handleRemove} contacts={this.state.contacts} filter={this.state.filter} />
				</Section>
			</div>
		</>
	);
}

export default App
