import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CartCheckFill } from "react-bootstrap-icons";
import BillingProduct from "./BillingProduct";
import { setCart } from "../actions/products";
import { connect } from "react-redux";

const CheckOut = (props:any) => {
    const allproducts = props.cart;
    const [cartObj, setCartObj] = useState([] as any);
    useEffect(() => {
      let dcart = [];
      let keys = Object.keys(allproducts);
      for (let i in keys) {
        dcart.push(allproducts[keys[i]]);
      }
      setCartObj([...dcart]);
    }, [props.cart]);
  
  
  return (
    <div className="mt-12">
      <div className="flex justify-end text-slate-700 font-bold">
        <Link to="/cart">
          <ArrowLeft size={30} />
        </Link>
      </div>

<div>
<div className=" bg-slate-700 text-white hover:bg-slate-600 py-2  cursor-pointer grid grd-rows-auto grid-cols-3 px-10">
    <div>products</div>
    <div>single price</div>
    <div>total price</div>

</div>
    {cartObj.map((a:any)=>{
       return <BillingProduct unitPrice={a.unitPrice} name={a.name} totalPrice={a.totalPrice} />
    })}
</div>
      <Link
        to={`/order`}
        className="text-white flex items-center justify-center shadow-lg fixed bottom-0 bg-emerald-400 w-full py-1 px-2"
      >
        order <CartCheckFill />
      </Link>
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
export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);
