import { Person } from "react-bootstrap-icons";
import { connect } from "react-redux";
import { setAccount } from "../actions/products";
import { useDispatch } from "react-redux";
import {stateChangeLogin} from '../fire/Fire'
import { useState, useEffect } from "react";
const User = (props:any) => {
    
    useEffect(()=>{
        stateChangeLogin((user:any)=>{
            if(user){
                props.setAccount(user)
                console.log(user);
                
            }else{
                props.setAccount({})
            }
        })
    },[])
  return (
    <div className="relative bottom-[.1rem]">
      <span className="absolute bottom-[0rem] right-[.2rem] mx-2 shadow  rounded-full h-3 w-3 flex justify-center items-center text-sm text-white" style={{backgroundColor:props.account?'green':'red'}}></span>
      <Person size={25} />
    </div>
  );
};

export default connect(
  (state: any) => {
    return { account: state.account };
  },
  (dispatcher: Function) => {
      return {
          setAccount: (val:any)=>dispatcher(setAccount(val))
      }
  }
)(User);
