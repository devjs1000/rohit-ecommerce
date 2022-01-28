import { useState } from "react"
import { setCart } from "../actions/products"

const MyCart=()=>{

    return (
        <div>
            
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

export default MyCart