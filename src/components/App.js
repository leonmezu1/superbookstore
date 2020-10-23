import React from 'react';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <BooksList />
      <BooksForm />
    </>
  );
}

export default App;
