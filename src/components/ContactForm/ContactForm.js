import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';

import store from '../../redux/store.js';

import contacstActions from '../../redux/contacts/contacts-actions';

import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  onInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.onFormSubmit} className={styles.contactForm}>
        <label htmlFor={this.nameInputId}>Name</label>
        <input
          className={styles.formInput}
          type="text"
          name="name"
          value={name}
          onChange={this.onInputChange}
          id={this.nameInputId}
        />
        <label htmlFor={this.numberInputId}>Number</label>
        <input
          className={styles.formInput}
          type="number"
          name="number"
          value={number}
          onChange={this.onInputChange}
          id={this.numberInputId}
        />
        <button type="submit" className={styles.submitBtn}>
          Add contacts
        </button>
      </form>
    );
  }
}

// const { contacts } = store.getState().phonebook;
// const getSameName = contacts.filter(contact => contact.name === name);
const getSameName = (contacts, name) => {
  return console.log(contacts.filter(contact => contact.name === name));
};

const mapDispatchToProps = dispatch => ({
  onSubmit: ({ name, number }) => {
    const { contacts } = store.getState().phonebook;
    const getSameName = contacts.filter(contact => contact.name === name);
    getSameName.length > 0
      ? alert(`${name} is already in contacts`)
      : dispatch(contacstActions.addContact({ name, number }));
  },
});

export default connect(null, mapDispatchToProps)(ContactForm);
