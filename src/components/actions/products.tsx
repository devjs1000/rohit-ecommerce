export const getProduct = (val: any) => {
  return {
    type: "GET_PRODUCTS",
    productVal: val,
  };
};

export const setProduct = () => {
  return {
    type: "SET_PRODUCTS",
  };
};

export const setSearch = (searchVal: any) => {
  return {
    type: "SET_SEARCH",
    searchVal
  };
};

export const setCart=(cartVal:any)=>{
  return {
    type: 'SET_CART',
    cartVal
  }
}

export const setAccount=(accountVal:any)=>{
  return {
    type:'SET_ACCOUNT',
    accountVal
  }
}