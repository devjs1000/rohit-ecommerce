import { useState } from "react";
import { X } from "react-bootstrap-icons";
import { connect } from "react-redux";
import { setCart } from "../actions/products";

const CartProduct = (props: any) => {
  return (
    <div>
      <div className="shadow-lg flex flex-wrap justify-between items-center text-gray-700 px-2 py-2">
        <div className="grid">
          <h1 className="text-2xl text-slate-800 ">{props.name}</h1>

          <img
            src={props.img}
            alt={props.name}
            className="w-[5rem] select-none"
          />
        </div>

        <X
          size={40}
          color="#ef4444"
          onClick={() => {
            const newCart = { ...props.cart };
            delete newCart[props.name];
            props.addCart(newCart);
          }}
        />
        <div className="w-full">
          <button className="shadow px-2 py-1 hover:bg-gray-100">
            Price : {props.unitPrice} rs
          </button>
          <button className="shadow px-2 py-1 hover:bg-gray-100">
            Total Price : {props.totalPrice} rs
          </button>
          <button className="shadow px-2 py-1 bg-green-400 text-white hover:bg-green-500">
            Unit : 1x{props.quantity} rs
          </button>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state: any) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    addCart: (val: any) => dispatch(setCart(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartProduct);
