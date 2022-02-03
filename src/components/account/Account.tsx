import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, PersonFill } from "react-bootstrap-icons";
import { setAccount } from "../actions/products";
import { connect } from "react-redux";

const Account = (props:any) => {

  return (
    <div className="py-12 flex justify-center items-center flex-wrap">
              <div className="flex justify-end w-full text-slate-700 font-bold">
        <Link to="/">
          <ArrowLeft size={30} />
        </Link>
      </div>

      {props.account ? (
        <>
          <div className="w-full flex justify-center ">
            <PersonFill
              className="bg-white shadow-lg rounded-full p-5 text-green-400"
              size={150}
            />
          </div>
          <div className="w-full mt-5 text-center text-4xl text-slate-700">
           {props.account.displayName || 'user'}
          </div>
          <div className="w-full  text-center text-2xl text-slate-400">
            {props.account.email}
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center h-[70vh]">
          <Link to='/login' className=" bg-gray-100 text-slate-700 hover:shadow-lg rounded-l py-2 px-4 font-semibold text-xl">login</Link>
          <button  className=" text-gray-100 bg-green-600   py-2 px-4 font-semibold text-xl">or</button>

          <Link to='/create-account' className="bg-green-500 hover:shadow-lg rounded-r py-2 px-4 text-xl font-semibold text-white">create account</Link>
        </div>
      )}
    </div>
  );
};

const mapStateToProps=(state:any)=>{
return {
    account: state.account
}
}
const mapDispatchToProps=(dispatch:Function)=>{
    return {
        setAccount: (val:object)=>dispatch(setAccount(val))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Account)
