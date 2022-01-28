import { useState } from "react"
import { setCart } from "../actions/products"
import { connect } from "react-redux"
const MyCart=(props:any)=>{

    return (
        <div>
            {
                props.cart.map(productInCart)
            }
        </div>
    )
}

const mapStateToProps=(state:{cart:object})=>{
    return {
        cart:state.cart
    }
}
const mapDispatchToProps=(dispatch:Function)=>{
    return {
        addCart: (val:any)=>dispatch(setCart(val))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCart)