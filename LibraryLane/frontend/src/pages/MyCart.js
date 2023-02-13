import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { StyleSheet, css } from "aphrodite";
import { useBookstore } from "../store";
import Header from "../components/Header";
import { COLORS } from "../styles/Constant";
import Footer from "../components/Footer";

const Book = ({ book }) => {
  const navigate = useNavigate();
  const setCurrentBook = useBookstore((state) => state.setBook);
  const removeFromCart = useBookstore((state) => state.removeFromCart);
  return (
    <div>
      <div className={css(styles.horizontal)}>
        <div className={css(styles.bottom)}>
          <div>{book.title}</div>

          <div>
            <button
              className={css(styles.buyB)}
              onClick={() => {
                setCurrentBook(book);
                navigate("/order/" + book.id);
              }}
            >
              Buy
            </button>

            <button
              className={css(styles.remB)}
              onClick={() => {
                removeFromCart(book);
              }}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const MyCart = () => {
  const books = useBookstore((state) => state.cart);

  return (
    <div>
      <Header />

      <div className={css(styles.pro)}>
        <div className={css(styles.orderSec)}>
          <div className={css(styles.myOrders)}>
            <b>MY CART</b>
          </div>
          <div className={css(styles.container)}>
            {books.map((book) => (
              <Book book={book} key={book.id} />
            ))}{" "}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const styles = StyleSheet.create({
  pro: {
    width: 935,
    display: "flex",
    marginLeft: 490,
    marginRight: 490,
    marginTop: 88,
  },

  orderSec: {
    display: "flex",
    flexDirection: "column",
  },
  container: {
    width: 650,
    height: 621,
    backgroundColor: COLORS.white,
    display: "flex",
    flexDirection: "column",
    marginTop: 16,
  },
  horizontal: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: 112,
    border: `1px solid ${COLORS.black}`,
    borderRadius: 5,
  },

  bottom: {
    display: "flex",
    justifyContent: "space-between",
    margin: 25,
  },
  buyB: {
    width: 100,
    height: 30,
    backgroundColor: COLORS.secondary,
    color: COLORS.white,
    border: `1px solid ${COLORS.secondary}`,
    cursor: 'pointer',
    borderRadius: 3,
  },
  remB: {
    width: 100,
    height: 30,
    backgroundColor: COLORS.white,
    color: COLORS.black,
    border: `1px solid ${COLORS.secondary}`,
    borderRadius: 3,
    marginLeft: 10,
    cursor: 'pointer'
  },
});

export default MyCart;
