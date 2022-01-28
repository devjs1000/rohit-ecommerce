import { useState } from "react";
import List from "./blocks/List";
import Slide from "./blocks/Slide";
import Nav from "./components/nav/Nav";
import Products from "./components/products/Products";
import { Routes, Route } from "react-router-dom";
import Overview from "./components/products/Overview";
import MyCart from './components/products/MyCart'
function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<MyCart />} />
        <Route path="/overview/:product" element={<Overview />} />
      </Routes>
    </div>
  );
}
{/* <Overview
  imgSrc={props.imgSrc}
  name={props.name}
  price={props.price}
  description={props.description}
  linkAddress={props.linkAddress}
/>; */}
export default App;
