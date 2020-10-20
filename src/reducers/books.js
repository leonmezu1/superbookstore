/* eslint-disable no-unused-vars */

import { CREATEBOOK, REMOVEBOOK, UPDATEBOOK } from '../types/types';

const initialState = {
  books: [
    {
      title: 'Harry Potter',
      isbn: '1022g',
      category: 'fiction',
    },
    {
      title: 'Capitalist Realism',
      isbn: '1023g',
      category: 'documentary',
    },
    {
      title: '100 years of solitude',
      isbn: '1024g',
      category: 'fiction',
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATEBOOK:
      return {
        ...state,
        books: [...state.books, action.book],
      };
    default:
      return state;
  }
};
