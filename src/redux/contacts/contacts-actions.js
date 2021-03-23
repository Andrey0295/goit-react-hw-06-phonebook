/* eslint-disable import/no-anonymous-default-export */
import shortid from 'shortid';
import types from './contacts-types';

const addContact = ({ name, number }) => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    name: name,
    number: number,
  },
});

const deleteContact = contactId => ({
  type: types.DELETE,
  payload: contactId,
});

const changeFilter = filterValue => ({
  type: types.CHANGE_FILTER,
  payload: filterValue,
});

export default { addContact, deleteContact, changeFilter };
