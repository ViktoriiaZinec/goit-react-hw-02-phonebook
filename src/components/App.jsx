import { Component } from 'react';
import { AddContacts } from './AddContacts/AddContacts';
import { nanoid } from 'nanoid';
import { ContactsList } from './ContactsList/ContactsList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  createUser = data => {
    const newUser = {
      ...data,
      id: nanoid(),
    };

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newUser],
      };
    });
    console.log('newUser :>> ', newUser);
  };
  render() {
    console.log('this render:>> ', this);
    return (
      <div>
        <AddContacts createUser={this.createUser} />
        <ContactsList contacts={this.state.contacts} />
      </div>
    );
  }
}
