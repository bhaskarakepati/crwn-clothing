import React from "react";

import "./checkout.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../checkout-item/checkout-item.component";
import {
  selectCartItems,
  cartTotalPrice,
} from "../../../redux/cart/cart.selectors";
import StripeCheckoutButton from "../../stripe/stripe-button.component";

const CheckoutPage = ({ cartItems, totalPrice }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>quantity</span>
      </div>
      <div className="header-block">
        <span>price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">TOTAL: £{totalPrice}</div>
    <div className="test-warning">
      *Please use the below test credit cards to test*
      <br />
      4242 4242 4242 4242 - Exp: 01/21 - CVV : 123
    </div>
    <StripeCheckoutButton price={totalPrice} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: cartTotalPrice,
});

export default connect(mapStateToProps)(CheckoutPage);
