import React from "react";
import { useSelector } from "react-redux";

const BooksList = () => {
  const books = useSelector((state) => state.bookStoreState.books);
  return (
    <div>
      <h1>Inside booklists</h1>
      <table>
        <thead>
          <tr>
            <td>Title</td>
          </tr>
        </thead>
        <tbody>
        {books.map(
          (book) => {
            return (
              <tr key={book.id}>
                <td>{book.title}</td>
              </tr>
            )
          }
        )}
        </tbody>
      </table>
    </div>
  )
};

export default BooksList;
