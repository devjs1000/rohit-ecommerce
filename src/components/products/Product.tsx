import { useState, useEffect } from "react";
import Overview from "./Overview";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Cart, Plus, Dash} from "react-bootstrap-icons";
import { setCart } from "../actions/products";
const Product = (props: any) => {
  // console.log(props.cart);
  const [cartCount, setCartCount]=useState(1)

  return (
    <div>
      <div className="shadow-lg m-4 rounded static w-[20rem] h-[20rem] bg-gray-100 px-2 py-1">
        <Link className="h-[16rem]" to={`/overview/${props.name}`}>
          <img src={props.imgSrc} alt="products" />
        </Link>
        <div className="flex h-[4rem] w-full justify-around items-center">
          <div className="w-2/3">
            <h1 className="text-2xl text-gray-800">{props.name}</h1>
            <div className="text-lg text-gray-600">{props.price} </div>
          </div>
          <div className="w-[12rem]">
            {/* add to cart simple */}
            <button
              onClick={() => {
                
                props.addCart({...props.cart, [props.name]:{quantity:cartCount, name:props.name, unitPrice: props.price, totalPrice:props.price*cartCount}});
              }}
              className="bg-blue-400 text-white px-2 py-1 h-[2rem]  "
            >
              <Cart size={20} />
            </button>

            <div className="inline-block text-center"
            >
              <span className="inline-block w-[20px] h-[20px]  mx-1 text-blue-600">
              {cartCount}
              </span>
            </div>

            {/* add to cart minus */}
            <button
              onClick={() => {
               setCartCount(cartCount-1)
              }}
              className="bg-blue-400 text-white px-2 py-1 h-[2rem]  "
            >
              <Dash size={20} />
            </button>

            {/* add to cart plus */}
            <button
              onClick={() => {
                setCartCount(cartCount+1)
              }}
              className="bg-blue-400 text-white px-2 py-1 h-[2rem]  "
            >
              <Plus size={20} />
            </button>
          </div>
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
    addCart: (val: number) => dispatch(setCart(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
