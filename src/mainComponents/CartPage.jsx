import React from "react";
import { Link } from "react-router-dom";
import CartSingleComponent from "../subComponents/CartSingleComponent";

const CartPage = ({ cartData, setCartData, currency }) => {
  return (
    <div style={{ paddingRight: "100px", paddingBottom: "54px" }}>
      <Link to="/" style={{ textDecoration: "none", position: "fixed", top: "13px", left: "31px", zIndex: "2000" }}>
        <img src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/50/000000/external-left-arrows-kmg-design-glyph-kmg-design-1.png" />
      </Link>
      <div style={{ fontSize: "30px", fontWeight: "600", marginBottom: "60px" }}>CART</div>
      {Object.keys(cartData).map((data) => (
        <CartSingleComponent key={data} cartData={cartData[data]} setCartData={setCartData} currency={currency} />
      ))}
    </div>
  );
};

export default CartPage;
