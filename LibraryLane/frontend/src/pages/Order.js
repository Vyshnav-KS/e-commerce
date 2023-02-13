import { StyleSheet, css } from "aphrodite";
import React, { useState } from "react";
import { COLORS } from "../styles/Constant";
import Header from "../components/Header";
import axios from "axios";
import { useBookstore } from "../store";
import Footer from "../components/Footer";
import { useNavigate } from "react-router";

const Order = () => {
  const user = useBookstore((state) => state.user);
  const book = useBookstore((state) => state.book);
  const navigate = useNavigate();

  const [username, setUsername] = useState(user.name)
  const [address, setAddress] = useState('')
  const [pincode, setPincode] = useState('')
  const [deliveryCharge, setDeliveryCharge] = useState(49)
  const [totalAmount, setTotalAmount] = useState(0)
  const [status, setStatus] = useState('ordered')



  const handleSubmit = (event) => {

    const orderData = {
      user: username,
      books: book.title,
      address: address,
      pin_code: pincode,
      delivery_charge: 49,
      total_amount: parseFloat(book.price) + 49
    }

    event.preventDefault();
    axios
      .post(`http://127.0.0.1:8000/api/order/`, orderData)
      .then((res) => {
        console.log(res.data);
        alert("Order Created");
        navigate('/profile')
        
      })
      .catch((error) => {
        console.error(error);
        alert("Error")

      });
  };

  return (
    <div className={css(styles.root)}>
      <Header />
      <div className={css(styles.contents)}>
        <div className={css(styles.orderDetails)}>
          <div className={css(styles.contact)}>CONTACT DETAILS</div>
          <div className={css(styles.detailBox)}>
            <div className={css(styles.top)}>
              <div className={css(styles.contentsBox)}>
                <div className={css(styles.title)}>{username} </div>
                <div className={css(styles.title)}>Book: {book.title}</div>
                <div className={css(styles.title)}>Order Date: 12/10/2023</div>
                <div className={css(styles.titleCod)}>COD Available</div>
              </div>
              <img src={book.image_url} alt="image" className={css(styles.image)}></img>
            </div>
            <div className={css(styles.bottom)}>
              <div className={css(styles.title)}>Address</div>
              <form onSubmit={handleSubmit}>
                <input
                  className={css(styles.inpf)}
                  type="text"
                  name="address"
                  placeholder="(House No, Building, Street, Area)"
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                ></input>
                <input
                  className={css(styles.inpf)}
                  type="text"
                  name="pin_code"
                  placeholder="pincode"
                  value={pincode}
                  onChange={e => setPincode(e.target.value)}
                ></input>
                <input
                  className={css(styles.button)}
                  type="submit"
                  value="Place Order"
                />
              </form>
            </div>
          </div>
        </div>
        <div className={css(styles.priceDetails)}>
          <div className={css(styles.price)}>PRICE DETAILS</div>
          <div className={css(styles.divider)}></div>
          <div className={css(styles.prices)}>MRP : {book.price}</div>
          <div className={css(styles.prices)}>Total Discount Price : {}</div>
          <div className={css(styles.prices)}>Delivery Charges : </div>
          <div className={css(styles.prices)}>Other Charges : </div>
          <div className={css(styles.totalPrice)}>
            TOTAL AMOUNT : <b>${parseFloat(book.price) + 49}</b>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const styles = StyleSheet.create({
  root: {},
  contents: {
    marginLeft: 384,
    marginRight: 384,
    marginTop: 81,
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
  },
  orderDetails: {
    display: "flex",
    flexDirection: "column",
  },
  detailBox: {
    width: 650,
    height: 543,
    borderRadius: 10,
    backgroundColor: COLORS.white,
  },
  top: {
    display: "flex",
    flexDirection: "row",
    maxwidth: 565,
    marginTop: 19,
    marginLeft: 42,
    marginRight: 42,
    justifyContent: "space-between",
    alignItems: "center",
  },
  contentsBox: {
    height: 106,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  image: {
    width: 156,
    height: 235,
  },
  bottom: {
    marginLeft: 42,
    marginRight: 42,
    marginTop: 10,
  },
  inpf: {
    borderRadius: 5,
    width: 546,
    margin: 9,
    height: 58,
    // paddingLeft: 20,
    border: `1.5px solid ${COLORS.grey}`,
    "::placeholder": {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: "0.06em",
    },
  },
  priceDetails: {
    marginLeft: 66,
  },
  divider: {
    width: 436,
    height: 2,
    backgroundColor: COLORS.grey,
  },
  button: {
    margin: 9,
    width: 546,
    height: 58,
    color: COLORS.white,
    backgroundColor: COLORS.secondary,
    fontSize: 16,
    fontWeight: 600,
    letterSpacing: "0.06em",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    borderRadius: 5,
    border: "none",
    cursor: "pointer",
  },
});

export default Order;
