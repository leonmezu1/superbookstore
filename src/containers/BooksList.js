import React from "react";
import { useSelector } from "react-redux";
import Book from "../components/Book";

const BooksList = () => {
  const books = useSelector((state) => state.bookStoreState.books);
  return (
    <div>
      <h1>Inside booklists</h1>
      <table>
        <thead>
          <tr>
            <td>Title</td>
            <td>Category</td>
            <td>ISBN</td>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <Book key={book.isbn} book={book} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksList;
