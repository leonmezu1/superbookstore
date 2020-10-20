/* eslint-disable no-unused-vars */

import { CREATEBOOK, UPDATEBOOK } from '../types/types';

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
    default:
      return state;
  }
};
