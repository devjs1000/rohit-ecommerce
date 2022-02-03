import { useState } from "react";
import { X, Plus, Dash, Cart } from "react-bootstrap-icons";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { setCart } from "../actions/products";
const Overview = (props: any) => {
  const allProducts = props.products;
  const [cartCount, setCartCount] = useState(1);
// console.log(props.cart);

  const param = useParams();
  const [overview, setOverview] = useState({
    ...allProducts.filter((a: any) => {
      return a.name === param.product;
    })[0],
  });

  return (
    <div
      className="shadow-lg left-0 bottom-0 rounded relative w-[100vw] min-h-[90vh] bg-gray-100 "
      style={{ position: "fixed", zIndex: "10", height: "93vh" }}
    >
      <div className="flex justify-end mx-6">
        <Link to="/">
          <X size={40} />
        </Link>
      </div>
      <div className="">
        <img src={overview.imgSrc} alt={overview.name} className="w-60 mx-auto" />
        <blockquote className="px-4 py-2 text-gray-800">
          {overview.description}
        </blockquote>
      </div>
      <div className="absolute m-4 bottom-0 flex w-full justify-around">
        <div className="w-2/3">
          <h1 className="text-2xl text-gray-800">{overview.name}</h1>
          <div className="text-lg text-gray-600">{overview.price} </div>
        </div>
        <div className="w-[12rem]">
            {/* add to cart simple */}
            <button
              onClick={() => {
                props.addCart({
                  ...props.cart,
                  [overview.name]: {
                    quantity: cartCount,
                    name: overview.name,
                    unitPrice: overview.price,
                    totalPrice: overview.price * cartCount,
                    img: overview.imgSrc,
                  },
                });
              }}
              className="bg-green-400 text-white px-2 py-1 h-[2rem]  "
            >
              <Cart size={20} />
            </button>

            <div className="inline-block text-center">
              <span className="inline-block w-[20px] h-[20px]  mx-1 text-green-600">
                {cartCount}
              </span>
            </div>

            {/* add to cart minus */}
            <button
              onClick={() => {
                setCartCount(cartCount - 1);
              }}
              className="bg-green-400 text-white px-2 py-1 h-[2rem]  "
            >
              <Dash size={20} />
            </button>

            {/* add to cart plus */}
            <button
              onClick={() => {
                setCartCount(cartCount + 1);
              }}
              className="bg-green-400 text-white px-2 py-1 h-[2rem]  "
            >
              <Plus size={20} />
            </button>
          </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: { products: any; cart: any }) => {
  return {
    products: state.products,
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    addCart: (val: number) => dispatch(setCart(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Overview);
