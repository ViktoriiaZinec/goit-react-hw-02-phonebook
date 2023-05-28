export function ContactsList({ contacts }) {
  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}:{contact.number}
          </li>
        ))}
      </ul>
    </div>
  );
}
