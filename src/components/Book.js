import React from 'react';
import PropTypes from 'prop-types';
import { deleteBook } from '../actions/index';
import { useDispatch } from 'react-redux';


const Book = ({ book }) => {
  const { title, id, category } = book;
  const dispatch = useDispatch();
  const handleBookRemove = book => {
    dispatch(deleteBook(book));
  }  
  return (
    <tr>
      <td className="title">{title}</td>
      <td className="category">{category}</td>
      <td className="id">{id}</td>
      <td><button onClick={() => handleBookRemove(book)}>Delent</button></td>
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
