import { combineReducers } from 'redux';
import booksReducers from './books';

export default combineReducers({
  bookStoreState: booksReducers,
});
