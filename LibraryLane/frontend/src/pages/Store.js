import { StyleSheet, css } from "aphrodite";
import React from "react";
import Header from "../components/Header";
import BookCard from "../components/BookCard";
import Footer from "../components/Footer";

const Store = () => {
  return (
    <div className={css(styles.root)}>
      <Header />
      <div className={css(styles.books)}>
        <BookCard />
      </div>
      <Footer />
    </div>
  );
};

const styles = StyleSheet.create({
  books: {
    marginLeft: 200,
    marginRight: 200,
  },
});

export default Store;
