import { useState } from "react";
import { Link } from "react-router-dom";
const CheckOut = (props:any) => {
  return (
    <div className="  hover:bg-slate-100 py-2 text-slate-800 cursor-pointer grid grd-rows-auto grid-cols-3 px-10">
     <div > {props.name} </div>
     <div>{props.unitPrice}rs</div>
     <div>{props.totalPrice}rs</div>
    </div>
  );
};

export default CheckOut;
