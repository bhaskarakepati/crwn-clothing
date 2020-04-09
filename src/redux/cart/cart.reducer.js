import CartActionType from "./cart.types";
import { addItemsToCart } from "./cart.utils";

const INTITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const CartReducer = (state = INTITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionType.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionType.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemsToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default CartReducer;
