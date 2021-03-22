/* eslint-disable import/no-anonymous-default-export */
import shortid from 'shortid';
import types from './contacts-types';

const addContact = (name, number) => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    name: name,
    number: number,
  },
});

export default { addContact };
