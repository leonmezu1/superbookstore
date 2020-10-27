import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../actions/index';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const {
    title, id, category, author,
  } = book;
  const handleBookRemove = book => {
    dispatch(deleteBook(book));
  };
  return (
    <tr>

      <td>
        <div className="d-flex flex-column">
          <div className="category">{category}</div>
          <div className="title">{title}</div>
          <div className="author">{author}</div>
          <div className="id">{id}</div>
        </div>
      </td>

      <td>
        <Button type="button" onClick={() => handleBookRemove(book)}>
          Remove Book
        </Button>
      </td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
    category: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default Book;
