import { StyleSheet, css } from "aphrodite";
import React, { useEffect, useState } from "react";
import { COLORS } from "../styles/Constant";
import axios from "axios";
import { Link } from "react-router-dom";

const BookCard = ({ limit }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/book/")
      .then((res) => {
        setBooks(res.data.slice(0, limit));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [limit]);

  return (
    <div className={css(styles.bookSec)}>
      {books.map((book) => (
        <Link
          to={`/books/${book.id}`}
          id={book.id}
          className={css(styles.root)}
        >
          <img
            src={book.image_url}
            alt="book cover"
            className={css(styles.image)}
          />

          <div className={css(styles.contentBar)}>
            <div className={css(styles.titleSec)}>
              <div className={css(styles.title)}>{book.title}</div>
              <div className={css(styles.price)}>₹ {book.price}</div>
            </div>
            <div className={css(styles.author)}>{book.author}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

const styles = StyleSheet.create({
  root: {
    textDecoration: "none",
    width: 355,
    height: 530,
    backgroundColor: "#F7F7F7",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 20,
    color: COLORS.black,
  },
  image: {
    maxWidth: 229,
    height: 343,
  },
  contentBar: {
    display: "flex",
    flexDirection: "column",
    height: 132,
    backgroundColor: COLORS.white,
    marginTop: 35,
    justifyContent: "space-between",
    width: 355,
  },
  titleSec: {
    display: "flex",
    justifyContent: "space-between",
    margin: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
    width: 250
  },
  price: {
    color: COLORS.secondary,
    fontSize: 22,
    fontWeight: 600,
  },
  author: {
    margin: 15,
    fontSize: 18,
    fontWeight: 400,
    color: COLORS.grey,
  },
  bookSec: {
    marginTop: 55,
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    columnGap: 33,
    rowGap: 56,
    justifyContent: "space-between",
  },
});

export default BookCard;
