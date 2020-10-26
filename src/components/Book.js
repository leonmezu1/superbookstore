import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../actions/index';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const { title, id, category } = book;
  const handleBookRemove = book => {
    dispatch(deleteBook(book));
  };
  return (
    <tr>
      <td className="title">{title}</td>
      <td className="category">{category}</td>
      <td className="id">{id}</td>
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
  }).isRequired,
};

export default Book;
