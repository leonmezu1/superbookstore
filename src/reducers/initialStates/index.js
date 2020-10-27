import { v4 } from 'uuid';

const random = require('random-name');

export const booksInitialState = {
  books: [
    {
      title: 'Harry Potter',
      id: v4(),
      category: 'Action',
      author: random(),
    },
    {
      title: 'Capitalist Realism',
      id: v4(),
      category: 'Action',
      author: random(),
    },
    {
      title: '100 years of solitude',
      id: v4(),
      category: 'Action',
      author: random(),
    },
  ],
};

export const initialState = {};
