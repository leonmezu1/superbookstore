/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => {
  const { title, isbn, category } = book;
  return (
    <tr>
      <td className="title">{title}</td>
      <td className="category">{category}</td>
      <td className="isbn">{isbn}</td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    isbn: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default Book;
