import React, { useState } from "react";
import { StyleSheet, css } from "aphrodite";
import { COLORS } from "../styles/Constant";
import { Link } from "react-router-dom";
import userIcon from '../assets/images/user.png'
import cartIcon from '../assets/images/shopping-cart.png'
import { useBookstore } from "../store";

const Header = () => {
  const cartNo = useBookstore((state) => state.cart)  
  return (
    <div className={css(styles.root)}>
      <div className={css(styles.contents)}>
        <Link to="/home" className={css(styles.logo)}>
          LibraryLane
        </Link>
        <div className={css(styles.navlinks)}>
          <div className={css(styles.navlink)}> About </div>
          <div className={css(styles.navlink)}> Categories </div>
          <div className={css(styles.navlink)}> Contact </div>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search Books"
            className={css(styles.search)}
          ></input>
        </div>
        <div className={css(styles.buttons)}>
          
            <Link to="/profile" className={css(styles.ulinel)}>
              <img src={userIcon} alt="profile"></img>
            </Link>
          
          
            <Link to="/cart" className={css(styles.ulines)}>
            <img src={cartIcon} alt="cart"></img>
                    
            </Link>
            ({cartNo.length})
        </div>
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  root: {
    height: 161,
    backgroundColor: COLORS.white,
    paddingLeft: 200,
    paddingRight: 200,
    display: "flex",
  },
  contents: {
    display: "flex",
    width: "100vw",
  },
  logo: {
    fontSize: 35,
    fontWeight: 700,
    color: COLORS.secondary,
    marginTop: 41,
    textDecoration: "none",
  },
  navlinks: {
    display: "flex",
    width: 387,
    justifyContent: "space-between",
    marginTop: 57,
    marginLeft: 139,
    marginRight: 139,
    fontSize: 16,
    fontWeight: 500,
  },
  search: {
    width: 450,
    height: 32,
    border: "none",
    borderRadius: 3,
    marginTop: 50,
    marginRight: 20,
    backgroundColor: "#F1F1F1",
    "::placeholder": {
      fontSize: 15,
      fontWeight: 500,
      color: COLORS.grey,
      paddingLeft: 11,
    },
  },
  buttons: {
    display: "flex",
    marginTop: 50,
    marginLeft: 15,
    width: 111,
    justifyContent: "space-between",
  },
  login: {
    width: 179,
    height: 48,
    borderRadius: 5,
    border: `2px solid ${COLORS.secondary}`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 18,
    fontWeight: 500,
    backgroundColor: COLORS.white,
  },
  signup: {
    width: 181,
    height: 50,
    borderRadius: 5,
    display: "flex",
    border: `none`,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 18,
    fontWeight: 500,
    backgroundColor: COLORS.secondary,
  },
  ulinel: {
    color: COLORS.black,
    textDecoration: "none",
    marginRight: 20
  },
  ulines: {
    color: COLORS.white,
    textDecoration: "none",
  },
});

export default Header;
