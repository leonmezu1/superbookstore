import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { deleteBookAction } from '../actions';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const { title, id, category } = book;
  const deleteBook = book => {
    dispatch(deleteBookAction(book));
  };
  return (
    <tr>
      <td className="title">{title}</td>
      <td className="category">{category}</td>
      <td className="id">{id}</td>
      <td className="deleteBook">
        <Button type="button" onClick={() => deleteBook(book)}>
          Delete
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
