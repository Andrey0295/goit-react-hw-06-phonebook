import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ContactListItem from './ContactListItem/ContactListItem';
import contactsActions from '../../redux/contacts/contacts-actions';

const ContactList = ({ contactsData, onDelete }) => {
  return (
    <ul>
      {contactsData.map(({ name, id, number }) => (
        <ContactListItem
          name={name}
          number={number}
          key={id}
          contactId={id}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contactsData: PropTypes.array,
};

ContactList.defaultProps = {
  contactsData: [],
};

const mapStateToProps = state => ({
  contactsData: state.phonebook.contacts,
});

const mapDispatchToProps = dispatch => ({
  onDelete: contactId => dispatch(contactsActions.deleteContact(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
