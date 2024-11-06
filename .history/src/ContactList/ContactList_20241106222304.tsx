interface ContactListProps {
	contacts: Contact[];
}

export class ContactList extends Component<ContactListProps> {
	render() {
		const { contacts } = this.props;
		return (
			<ul>
				{contacts.map((contact) => (
					<li key={contact.id}>
						{contact.name}: {contact.number}
					</li>
				))}
			</ul>
		);
	}
}
