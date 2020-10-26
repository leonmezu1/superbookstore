import { CREATEBOOK, REMOVEBOOK, CHANGEFILTER } from '../types';

export const createBook = book => {
  const newBook = {
    ...book,
    id: Math.floor(Math.random() * 100).toString(),
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
