import React from "react";

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

export default Book;
