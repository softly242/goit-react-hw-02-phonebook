import React, { Component } from 'react';
import Contacts from './Contacts/Contacts';
import shortid from 'shortid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: '1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: '2', name: 'Hermione Kline', number: '443-89-12' },
      { id: '3', name: 'Eden Clements', number: '645-17-79' },
      { id: '4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  handleAddContact = (name, number) => {
    const isExist = this.state.contacts.find(contact => contact.name === name);
    if (isExist) {
      alert(`${name} is already in contacts`);
      return;
    } 
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };
    this.setState(prev => ({
      contacts: [...prev.contacts, newContact],
    }));
  };
  handleFilter = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  removeContact = contactId => {
    this.setState(prev => {
      return {
        contacts: prev.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filter
          value={this.state.filter}
          handleChangeFilter={this.handleFilterChange}
        />
        <Contacts
          contacts={this.handleFilter()}
          handleRemoveContact={this.removeContact}
        />
      </div>
    );
  }
}

export default App;
