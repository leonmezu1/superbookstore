import React, { useState } from 'react';

const BooksForm = () => {
  const categoryArray = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

  const [bookInfo, setBookInfo] = useState({
    title: '',
    category: '',
  });

  const onSelectChange = e => {
    setBookInfo({
      ...bookInfo,
      [e.target.name]: e.target.value,
    });
  };

  const submitBook = e => {
    // It's gonna do something
    e.preventDefault();
  };

  return (
    <form onSubmit={submitBook}>
      <div className="group-control">
        <label htmlFor="title">
          Title
          <input
            type="text"
            name="title"
            placeholder="Enter the book's title"
            onChange={onSelectChange}
          />
        </label>
      </div>
      <div className="group-control">
        <label htmlFor="category">
          Category
          <select name="category" onChange={onSelectChange}>
            <option value="">Select a category</option>
            {categoryArray.map(category => (
              <option key="" value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
      </div>
      <button type="submit" className="btn-primary">
        Add book
      </button>
    </form>
  );
};
export default BooksForm;
