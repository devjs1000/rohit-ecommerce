import demoImg from "../../images/logo.svg";
const initialState = {
  products: [
    {
      name: "macbook",
      imgSrc: demoImg,
      price: 150000,
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste ea magnam nisi obcaecati molestiae, sequi deserunt velit rem consequuntur, tenetur inventore aperiam nam cupiditate voluptates quibusdam facilis corporis voluptatum? Labore?",
    },
    {
      name: "bag",
      imgSrc: demoImg,
      price: 13000,

      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste ea magnam nisi obcaecati molestiae, sequi deserunt velit rem consequuntur, tenetur inventore aperiam nam cupiditate voluptates quibusdam facilis corporis voluptatum? Labore?",
    },
    {
      name: "iphone",
      imgSrc: demoImg,
      price: 70000,

      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste ea magnam nisi obcaecati molestiae, sequi deserunt velit rem consequuntur, tenetur inventore aperiam nam cupiditate voluptates quibusdam facilis corporis voluptatum? Labore?",
    },
    {
      name: "camera",
      imgSrc: demoImg,
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste ea magnam nisi obcaecati molestiae, sequi deserunt velit rem consequuntur, tenetur inventore aperiam nam cupiditate voluptates quibusdam facilis corporis voluptatum? Labore?",
    },
    {
      name: "charger",
      imgSrc: demoImg,
      price: 7000,

      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste ea magnam nisi obcaecati molestiae, sequi deserunt velit rem consequuntur, tenetur inventore aperiam nam cupiditate voluptates quibusdam facilis corporis voluptatum? Labore?",
    },
    {
      name: "stylus",
      imgSrc: demoImg,
      price: 20000,

      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste ea magnam nisi obcaecati molestiae, sequi deserunt velit rem consequuntur, tenetur inventore aperiam nam cupiditate voluptates quibusdam facilis corporis voluptatum? Labore?",
    },
  ],
  search: "",
  cart: {},
  account:{}
};

const reducer = (state: typeof initialState = initialState, action: any) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: [...state.products, action.products] };
      break;
    case "SET_SEARCH":
      return { ...state, search: action.searchVal };
      break;
    case "SET_CART":
      return { ...state, cart: action.cartVal };
      break;
    case "SET_ACCOUNT":
      return { ...state, account: action.accountVal };
      break;
    default:
      return state;
  }
};

export default reducer;
