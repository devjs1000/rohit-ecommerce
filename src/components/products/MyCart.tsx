import { useState, useEffect } from "react";
// import { setCart } from "../actions/products";
import {Link} from 'react-router-dom'
import { connect } from "react-redux";
import CartProduct from "./CartProduct";
import {  ArrowLeft } from "react-bootstrap-icons";
const MyCart = (props: any) => {
  const allproducts = props.cart;
  const [cartObj, setCartObj] = useState([] as any);
  useEffect(() => {
    let dcart = [];
    let keys = Object.keys(allproducts);
    for (let i in keys) {
      dcart.push(allproducts[keys[i]]);
    }
    setCartObj([...dcart]);
    // console.log(dcart);
    // console.log(props.cart);
    
  }, [props.cart]);

  return (
    <div className="pt-[3rem]">
      <div className="flex justify-end text-slate-700 font-bold">
        <Link to='/'>
        <ArrowLeft size={30}/>
        </Link>
      </div>
      {cartObj.map((productInCart: any) => {
          
        return (
          <div key={productInCart.name}>
          <CartProduct
            
            name={productInCart.name}
            quantity={productInCart.quantity}
            unitPrice={productInCart.unitPrice}
            totalPrice={productInCart.totalPrice}
            img={productInCart.img}
          />
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state: { cart: object }) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, null)(MyCart);
