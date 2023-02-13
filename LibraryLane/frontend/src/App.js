import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route, Redirect, Navigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import axios from "axios";
import { useEffect, useState } from "react";
import Store from "./pages/Store";
import DetailBook from "./components/DetailBook";
import Order from "./pages/Order";
import MyCart from "./pages/MyCart";
import MyProfile from "./pages/MyProfile";

export const setAuthorizationToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

function App() {
  // const [authToken, setAuthToken] = useState(localStorage.getItem('jwtToken'));

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    setAuthorizationToken(token);
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Navigate to="/login" />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/register" element={<Signup />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route path="/books" element={<Store />}></Route>
          <Route path="/books/:id" element={<DetailBook />}></Route>
          <Route path="/order/:book_id" element={<Order />}></Route>
          <Route path="/cart/" element={<MyCart />}></Route>
          <Route path="/profile" element={<MyProfile />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
