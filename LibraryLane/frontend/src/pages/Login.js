import React, { useState } from "react";
import { StyleSheet, css } from "aphrodite";
import { COLORS } from "../styles/Constant";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { setAuthorizationToken } from "../App";
import { useBookstore } from "../store";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const setUser = useBookstore((state) => state.setUser);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/auth/login/", {
        username,
        password,
      });
      const token = res.data.access;
      localStorage.setItem("jwtToken", token);
      localStorage.setItem("username", username);
      setUser({
        name: username,
      });
      setAuthorizationToken(token);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={css(styles.root)}>
      <div className={css(styles.container)}>
        <div className={css(styles.contents)}>
          <div className={css(styles.logo)}>LibraryLane</div>
          <div className={css(styles.inputs)}>
            <form className={css(styles.form)} onSubmit={handleSubmit}>
              <input
                className={css(styles.inpf)}
                type="text"
                size="15"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></input>
              <input
                className={css(styles.inpf)}
                type="password"
                size="15"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <input
                className={css(styles.button)}
                type="submit"
                value="Log In"
              />
            </form>
            <div className={css(styles.textpwd)}> Forgot password ?</div>
            <div className={css(styles.text)}>
              {" "}
              Don’t have an account ?
              <Link to="/register" className={css(styles.login)}>
                {" "}
                Signup
              </Link>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    maxHeight: "100hv",
  },
  container: {
    marginTop: 186,
    minWidth: 522,
    height: 402,
    backgroundColor: COLORS.white,
    borderRadius: 15,
  },
  logo: {
    fontSize: 30,
    fontWeight: 700,
    color: COLORS.secondary,
    textAlign: "center",
    marginTop: 18,
  },
  form: {
    marginTop: 25,
    marginLeft: 31,
    marginRight: 31,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    columnGap: 10,
  },
  inpfname: {
    borderRadius: 10,
    width: 212,
    height: 45,
    paddingLeft: 20,
    marginBottom: 9,
    border: `1.5px solid ${COLORS.grey}`,
    "::placeholder": {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: "0.06em",
    },
  },
  inpf: {
    borderRadius: 10,
    width: 460,
    margin: 9,
    height: 45,
    paddingLeft: 20,
    border: `1.5px solid ${COLORS.grey}`,
    "::placeholder": {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: "0.06em",
    },
  },
  button: {
    margin: 9,
    width: 480,
    height: 45,
    color: COLORS.white,
    backgroundColor: COLORS.secondary,
    fontSize: 16,
    fontWeight: 600,
    letterSpacing: "0.06em",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    borderRadius: 10,
    border: "none",
    cursor: "pointer",
  },
  textpwd: {
    fontSize: 14,
    fontWeight: 400,
    textAlign: "left",
    margin: 20,
    marginLeft: 45,
    color: "#1535AA",
  },
  text: {
    fontSize: 14,
    fontWeight: 400,
    textAlign: "center",
    margin: 20,
  },
  login: {
    color: "#1535AA",
  },
});

export default Login;
