import { StyleSheet, css } from "aphrodite";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { COLORS } from "../styles/Constant";
import prof from "../assets/images/profile.png";
import { useBookstore } from "../store";
import axios from "axios";

const MyProfile = () => {
  const user = useBookstore((state) => state.user);

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/order/")
      .then((res) => {
        setOrders(res.data.slice(0, 5));
      })
      .catch((error) => {
        console.error(error);
      });
  }, [5]);

  return (
    <div className={css(styles.root)}>
      <Header />
      <div className={css(styles.pro)}>
        <div className={css(styles.profSec)}>
          <img src={prof} alt="image" />
          <div className={css(styles.title)}>{user.name}</div>
          <div className={css(styles.title)}>cart</div>
        </div>
        <div className={css(styles.orderSec)}>
          <div className={css(styles.myOrders)}>MY ORDERS</div>
          <div className={css(styles.container)}>
            {orders.map((order) => (
              <div id={order.id}>
                <div className={css(styles.horizontal)}>
                  <div className={css(styles.top)}>
                    {" "}
                    Order id: <b>{order.id}</b>
                  </div>
                  <div className={css(styles.bottom)}>
                    <div className={css(styles.bookName)}>
                      Book: <b>{order.books}</b>{" "}
                    </div>
                    <div className={css(styles.status)}>
                      Price: <b>{order.total_amount} </b>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer className={css(styles.footer)} />
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
  profSec: {
    display: "flex",
    flexDirection: "column",
    height: 200,
    justifyContent: "space-between",
    fontSize: 18,
    fontWeight: 500,
    marginRight: 100,
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
  top: {
    marginTop: 12,
    marginLeft: 25,
  },
  bottom: {
    display: "flex",
    justifyContent: "space-between",
    margin: 25,
  },
});

export default MyProfile;
