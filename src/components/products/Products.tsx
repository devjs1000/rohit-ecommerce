import Product from "./Product";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setProduct } from "../actions/products";

const Products = (props: any) => {
  const allProducts = props.products;
  const [products, setProducts] = useState([...allProducts]);
useEffect(()=>{
 
  const searched=allProducts.filter((a:any)=>a.name.match(props.search))
  setProducts(searched)
},[props.search])
  return (
    <div className="flex flex-wrap justify-center mt-12">
      {products.map((product: any, index: number) => {
        return (
          <Product
            key={index}
            imgSrc={product.imgSrc}
            name={product.name}
            price={product.price}
            description={product.description}
            linkAddress={""}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state: { products: any; search: any }) => {
  return {
    products: state.products,
    search: state.search,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    setProduct: () => dispatch(setProduct()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);
