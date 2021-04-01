import React, { Component } from 'react';

import Container from './components/Container/Container';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

import styles from './App.module.css';

class App extends Component {
  render() {
    return (
      <Container>
        <div className={styles.mainBlock}>
          <div>
            <h1>Phonebook</h1>
            <ContactForm onSubmit={this.handleContactsData} />
          </div>

          <div className={styles.contactsBlock}>
            <h1>Contacts</h1>

            <Filter />
            <ContactList />
          </div>
        </div>
      </Container>
    );
  }
}

export default App;
