import Product from "./Product";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setProduct } from "../actions/products";
import Form from "../../blocks/Form";
import { Link } from "react-router-dom";
const Order = (props: any) => {
  const allProducts = props.products;
  const [products, setProducts] = useState([...allProducts]);
useEffect(()=>{
 
  const searched=allProducts.filter((a:any)=>a.name.match(props.search))
  setProducts(searched)
},[props.search])
  return (
    <div className="flex flex-wrap justify-center mt-12">
        {props.account?
                <Form />
:
<div className="h-[80vh] flex justify-center items-center">
<Link to='/account' className="bg-green-500 py-2 px-4 shodow-lg hover:shadow-xl rounded-md text-xl text-white font-bold">please login or create-account</Link>

</div>
        }
    </div>
  );
};

const mapStateToProps = (state: { products: any; search: any, account: any }) => {
  return {
    products: state.products,
    search: state.search,
    account:state.account
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    setProduct: () => dispatch(setProduct()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Order);
