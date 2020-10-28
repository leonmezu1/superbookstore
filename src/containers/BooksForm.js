import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button, Col } from 'react-bootstrap';
import { createBook } from '../actions';

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
    if (book.title === '') return;
    dispatch(createBook(book));
  };

  return (
    <Form onSubmit={submitBook} className="container w-100">
      <Form.Row>
        <Col xs="auto" className="w-70">
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
        </Col>
        <Col xs="auto" className="mr-auto">
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
        </Col>
        <Col xs="auto">
          <Button type="submit" className="btn-primary mt-30">
            Add book
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
};

export default BooksForm;
