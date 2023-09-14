import React, { Component } from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyles } from './GlobalStyles';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = (newContact) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleFilterChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>

        <ContactForm addContact={this.addContact} contacts={contacts} />

        <h2>Contacts</h2>

        <Filter filter={filter} onFilterChange={this.handleFilterChange} />

        <ContactList contacts={contacts} filter={filter} onDeleteContact={this.deleteContact} />

        <GlobalStyles></GlobalStyles>
      </div>
    );
  }
}