import { v4 } from 'uuid';
import { CREATEBOOK, REMOVEBOOK, CHANGEFILTER } from '../types';

export const createBook = book => {
/* eslint-disable global-require */
  const random = require('random-name');
  const newBook = {
    ...book,
    id: v4(),
    author: random(),
  };
  return {
    type: CREATEBOOK,
    payload: newBook,
  };
};

export const deleteBook = book => ({
  type: REMOVEBOOK,
  payload: book,
});

export const changeFilter = filter => ({
  type: CHANGEFILTER,
  filter,
});
