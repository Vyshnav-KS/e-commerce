import { StyleSheet, css } from "aphrodite";
import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import Header from "./Header";
import { COLORS } from "../styles/Constant";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useBookstore } from "../store";
import Footer from "./Footer";

const DetailBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const setCurrentBook = useBookstore((state) => state.setBook);
  const addToCart = useBookstore((state) => state.addToCart);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/book/${id}/`)
      .then((res) => {
        setBook(res.data);
        setCurrentBook(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id, setCurrentBook]);

  const handleAddToCart = () => {
    addToCart(book);
    navigate("/cart");
  };

  if (!book) return <div>Loading...</div>;
  return (
    <div className={css(styles.root)}>
      <Header />
      <div className={css(styles.contents)}>
        <div className={css(styles.DetailBook)}>
          <div className={css(styles.options)}>
            <div className={css(styles.image)}>
              <img
                src={book.image_url}
                alt="imagex"
                className={css(styles.imagelw)}
              />
            </div>
            <div className={css(styles.buttons)}>
              <button
                type=""
                className={css(styles.cart)}
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
              <Link to={"/order/" + id} type="" className={css(styles.buy)}>
                Buy Now
              </Link>
            </div>
          </div>
          <div className={css(styles.details)}>
            <div className={css(styles.title)}>{book.title}</div>
            <div className={css(styles.description)}>{book.description}</div>
            <div className={css(styles.priceSec)}>
              <div className={css(styles.price)}>₹ {book.price}</div>
              <div className={css(styles.codStatus)}>
                {" "}
                Cash on Delivery Available
              </div>
              <div className={css(styles.seller)}>
                Seller: <b>Subin Kumar</b>
              </div>
            </div>
            <div className={css(styles.highlightsSec)}>
              <div className={css(styles.h)}>Highlights</div>
              <div className={css(styles.hcontents)}>
                <div className={css(styles.highlights)}>
                  Author : {book.author}
                </div>
                <div className={css(styles.highlights)}>Category : Fiction</div>
                <div className={css(styles.highlights)}>
                  Pages : {book.pages}
                </div>
                <div className={css(styles.highlights)}>Language : English</div>
                <div className={css(styles.highlights)}>
                  Binding : Paperback
                </div>
                <div className={css(styles.highlights)}>
                  Publisher : Independently Published
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={css(styles.similaritemSec)}>
          <div className={css(styles.simTitle)}> Similar Books</div>
          <BookCard limit={4} />
          <Link to="/books" className={css(styles.explore)}>
            Explore More
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const styles = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  contents: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 200,
    marginRight: 200,
  },
  DetailBook: {
    display: "flex",
    flexDirection: "row",
  },
  options: {
    width: 474,
    margin: 25,
  },
  image: {
    width: 474,
    height: 490,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white,
  },
  imagelw: {
    width: 301,
    height: 451,
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 27,
  },
  cart: {
    width: 230,
    height: 55,
    borderRadius: 5,
    border: `2px solid ${COLORS.secondary}`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 18,
    fontWeight: 500,
    backgroundColor: COLORS.white,
    cursor: "pointer",
  },
  buy: {
    width: 230,
    height: 55,
    borderRadius: 5,
    display: "flex",
    border: `none`,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 18,
    fontWeight: 500,
    backgroundColor: COLORS.secondary,
    color: COLORS.white,
    cursor: "pointer",
    textDecoration: 'none'
  },
  details: {
    width: 957,
    height: 572,
    backgroundColor: COLORS.white,
    marginTop: 25,
  },
  title: {
    fontSize: 22,
    fontWeight: 700,
    margin: 25,
  },
  description: {
    marginLeft: 25,
    marginRight: 25,
    fontSize: 20,
    fontWeight: 500,
    color: "#373737",
  },
  priceSec: {
    marginLeft: 25,
    marginTop: 43,
    marginRight: 25,
    display: "flex",
    justifyContent: "space-between",
  },
  price: {
    fontSize: 33,
    fontWeight: 600,
  },
  codStatus: {
    fontSize: 18,
    fontWeight: 500,
    color: COLORS.secondary,
  },
  highlightsSec: {
    display: "flex",
    flexDirection: "row",
    margin: 25,
    marginTop: 40,
    width: 470,
    justifyContent: "space-between",
    fontSize: 18,
  },
  h: {
    color: COLORS.grey,
  },
  hcontents: {
    height: 177,
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "column",
  },
  similaritemSec: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  simTitle: {
    marginTop: 52,
    fontSize: 30,
    fontWeight: 600,
  },
  explore: {
    width: 230,
    height: 55,
    borderRadius: 5,
    display: "flex",
    border: `none`,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 18,
    fontWeight: 500,
    backgroundColor: COLORS.secondary,
    color: COLORS.white,
    cursor: "pointer",
    marginTop: 20,
    textDecoration: "none",
  },
});

export default DetailBook;
