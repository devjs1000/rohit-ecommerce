import { Cart } from "react-bootstrap-icons";
import { setCart } from "../actions/products";
import { connect } from "react-redux";
import {Link} from 'react-router-dom'
// import { useEffect } from "react";
const MyCart = (props: any) => {
    // console.log(props);
    // useEffect(()=>{

    // },[])
  return (
    <Link to='/cart'>
      <span className="absolute top-0 mx-2 shadow bg-green-400 rounded-full h-5 w-5 flex justify-center items-center text-sm text-white">
       {Object.keys(props.cart).length}
      </span>
      <Cart size={20} />
    </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(MyCart);
