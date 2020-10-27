import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

const CategoryFilter = ({ handleFilterChange }) => {
  const categories = [
    'All',
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

  return (
    <Form.Control
      as="select"
      name="category"
      className="category-filter w-25 mr-auto ml-5"
      size="sm"
      onChange={handleFilterChange}
    >
      {categories.map(category => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </Form.Control>
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
