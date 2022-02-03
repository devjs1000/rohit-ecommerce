import { useState } from "react";
import List from "./blocks/List";
import Slide from "./blocks/Slide";
import Nav from "./components/nav/Nav";
import Products from "./components/products/Products";
import { Routes, Route } from "react-router-dom";
import Overview from "./components/products/Overview";
import MyCart from './components/products/MyCart'
import CheckOut from "./components/products/Checkout";
import Account from "./components/account/Account";
import CreateAccount from './components/fire/CreateAccount'
import Login from './components/fire/Login'
import Order from "./components/products/Order";

function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<MyCart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/account" element={<Account />} />
        <Route path="/create-account" element={<CreateAccount/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/order" element={<Order/>} />

        <Route path="/overview/:product" element={<Overview />} />
      </Routes>
    </div>
  );
}
export default App;
