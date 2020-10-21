import { CREATEBOOK, REMOVEBOOK } from '../types';

const createBook = book => ({
  type: CREATEBOOK,
  book,
});

const deleteBook = book => ({
  type: REMOVEBOOK,
  book,
});

export const createBookAction = book => dispatch => {
  const newBook = book;
  newBook.id = Math.floor(Math.random() * 100).toString();
  dispatch(createBook(newBook));
};

export const deleteBookAction = book => dispatch => {
  dispatch(deleteBook(book));
};
