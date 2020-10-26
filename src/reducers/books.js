/* eslint-disable no-unused-vars */

import { CREATEBOOK, REMOVEBOOK } from '../types';
import { booksInitialState } from './initialStates';

export default (state = booksInitialState, action) => {
  switch (action.type) {
    case CREATEBOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case REMOVEBOOK:
      return {
        ...state,
        books: state.books.filter(book => book !== action.payload),
      };
    default:
      return state;
  }
};
