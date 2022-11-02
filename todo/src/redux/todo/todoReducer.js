import { ADD, DELETE } from "./todotypes";

const initialCart = 0;
const todoReducer = (cart = initialCart, action) => {
  switch (action.type) {
    case ADD:
      return cart + action.payload;
    case DELETE:
      return cart - action.payload;
    default:
      return cart;
  }
};
export default todoReducer;
