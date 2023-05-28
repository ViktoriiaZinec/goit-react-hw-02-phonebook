export function ContactsList({ contacts, deleteContact }) {
  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}:{contact.number}
            <button
              onClick={event => {
                deleteContact(contact.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
