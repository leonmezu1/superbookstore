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
      <nav className="navbar">
        <h1 className="header">Inside booklists</h1>
        <CategoryFilter handleFilterChange={handleFilterChange} />
      </nav>
      <Table striped bordered hover>
        <thead>
          <tr>
            <td></td>
            <td></td>
          </tr>
        </thead>
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
