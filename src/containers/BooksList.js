import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap';
import { changeFilter } from '../actions';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = () => {
  const books = useSelector(state => state.bookStoreState.books);
  const filter = useSelector(state => state.filterStoreState);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div>
      <nav className="navbar sticky-top">
        <div className="container d-flex justify-content-start align-items-center">
          <span className="header ml">Bookstore CMS</span>
          <a
            href="#!"
            className="books-link ml-5 text-uppercase"
            onClick={() => {
              dispatch(changeFilter('All'));
            }}
          >
            Books
          </a>
          <CategoryFilter handleFilterChange={handleFilterChange} />
        </div>
      </nav>
      <Table borderless className="container">
        <tbody>
          {books
            .filter(book => book.category === filter || filter === 'All')
            .map(book => (
              <Book key={book.id} book={book} />
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default BooksList;
