import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { createBookAction } from '../actions';

const BooksForm = () => {
  const dispatch = useDispatch();
  const categoryArray = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

  const [book, setbook] = useState({
    title: '',
    id: '',
    category: '',
  });

  const onSelectChange = e => {
    setbook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const submitBook = e => {
    e.preventDefault();
    if (book.title === '' || book.category === '') return;
    dispatch(createBookAction(book));
    setbook({
      title: '',
      id: '',
      category: '',
    });
  };

  return (
    <Form onSubmit={submitBook}>
      <Form.Group controlId="bookFormTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          placeholder="Enter the book's title"
          onChange={onSelectChange}
          value={book.title}
        />
      </Form.Group>
      <Form.Group controlId="bookFormCategorySelect">
        <Form.Label>Category</Form.Label>
        <Form.Control as="select" name="category" onChange={onSelectChange}>
          <option value="">Select a category</option>
          {categoryArray.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Button type="submit" className="btn-primary">
        Add book
      </Button>
    </Form>
  );
};
export default BooksForm;
