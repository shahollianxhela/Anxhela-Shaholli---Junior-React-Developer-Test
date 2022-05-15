import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MiniCartComponent from "./MiniCartComponent";

const MiniCart = ({ displayCart, cartData, setCartData, currency }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  /////////////////////////////////
  // On any change in currency or cartData, Recalculate quantity and total price
  useEffect(() => {
    setTotalPrice(0);
    setTotalQuantity(0);
    Object.keys(cartData).map((data) => {
      setTotalQuantity((prev) => prev + cartData[data].quantity);
      cartData[data].prices.map((price) => price.currency.symbol === currency && setTotalPrice((prev) => prev + price.amount * cartData[data].quantity));
    });
  }, [currency, cartData]);
  /////////////////////////////////

  return (
    <div style={{ display: `${displayCart === false ? "none" : "block"}`, width: "288px", position: "absolute", top: "12vh", right: "87px", zIndex: 1999, backgroundColor: "white", padding: "16px" }}>
      {/* Top */}
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "5px", fontWeight: "600" }}>My Bag, </div> {totalQuantity} Items
      </div>
      {/*  */}

      {/* Center  */}
      {Object.keys(cartData).map((data) => (
        <MiniCartComponent key={data} componentData={cartData[data]} setCartData={setCartData} currency={currency} />
      ))}
      {/*  */}

      {/* Bottom */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontWeight: "600", marginTop: "52px" }}>
        <div>Total</div>
        <div>
          {`${currency} `}
          {totalPrice.toFixed(2)}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "35px", marginBottom: "10px" }}>
        <Link to="/cart">
          <button style={{ width: "140px", height: "43px", color: "black", border: "1px solid", borderRadius: "0px" }}>VIEW BAG</button>
        </Link>
        <button style={{ width: "140px", height: "43px", backgroundColor: "#5ECE7B", color: "white", borderRadius: "0px" }}>CHECK OUT</button>
      </div>
      {/*  */}
    </div>
  );
};

export default MiniCart;
