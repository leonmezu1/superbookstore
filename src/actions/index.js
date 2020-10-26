import { CREATEBOOK, REMOVEBOOK } from '../types';

export const createBook = book => {
  const newBook = {
    ...book,
    id: Math.floor(Math.random() * 100).toString(),
  };
  return {
    type: CREATEBOOK,
    payload: newBook,
  }
};

export const deleteBook = book => ({
  type: REMOVEBOOK,
  payload: book,
});

// export const createBookAction = book => dispatch => {
//   const newBook = book;
//   newBook.id = Math.floor(Math.random() * 100).toString();
//   dispatch(createBook(newBook));
// };

export const deleteBookAction = book => dispatch => {
  dispatch(deleteBook(book));
};
