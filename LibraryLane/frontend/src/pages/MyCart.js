import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useBookstore } from "../store";

const Book = ({ book }) => {
  const navigate = useNavigate();
  const setCurrentBook = useBookstore((state) => state.setBook);
  return (
    <div>
      <div>{book.title}</div>

      <button
        onClick={() => {
          setCurrentBook(book);
          navigate("/order/" + book.id);
        }}
      >
        BUY
      </button>
    </div>
  );
};

const MyCart = () => {
  const books = useBookstore((state) => state.cart);

  return (
    <div>
      {books.map((book) => (
        <Book book={book} key={book.id} />
      ))}
    </div>
  );
};

export default MyCart;
