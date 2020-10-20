import React from 'react';
import { Provider } from 'react-redux';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
import store from '../store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <BooksList />
        <BooksForm />
      </div>
    </Provider>
  );
}

export default App;
