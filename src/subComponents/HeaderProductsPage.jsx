import React, { useState } from "react";
import Logo from "./Logo";
import MiniCart from "./MiniCart";
// Apolo
import { useQuery } from "@apollo/client";
import { CATEGORY_NAME } from "../gql";
const HeaderProductsPage = ({ setCurrency, currency, setCategoryType, cartData, setCartData }) => {
  const { loading, error, data } = useQuery(CATEGORY_NAME);
  const [currencyBox, setCurrencyBox] = useState("none");

  // Left Header
  // Value of category buttons which changes to change buttons style
  const [value, setValue] = useState(0);

  // Cart
  const [displayCart, setDisplayCart] = useState(false);
  function handleDisplayCart() {
    displayCart === false ? setDisplayCart(true) : setDisplayCart(false);
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative", zIndex: "200", backgroundColor: "white", padding: "0px 103px 0px 110px", zIndex: 2000 }}>
        {/* Left */}
        <div>
          {data?.categories?.map((category, i) => (
            <button
              key={category.name}
              style={{ fontSize: "16px", padding: "28px 30px 30px 30px", borderBottom: `${value === i ? "1px solid #5ECE7B " : "none"}`, color: `${value === i ? "#5ECE7B" : "black"}` }}
              onClick={() => {
                setValue(i);
                setCategoryType(category.name);
              }}
            >
              {category.name.toUpperCase()}
            </button>
          ))}
        </div>
        {/*  */}

        {/* Center */}
        <Logo />
        {/*  */}

        {/* Right */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          {/* Menu */}
          <div>
            <label style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "43px", fontWeight: "600" }}>
              {currency}
              <div style={{ position: "relative" }}>
                <button onClick={() => setCurrencyBox((prev) => (prev === "none" ? setCurrencyBox("flex") : setCurrencyBox("none")))}>
                  <img src="https://img.icons8.com/material-outlined/20/000000/expand-arrow.png" />
                </button>
                <div style={{ display: `${currencyBox}`, flexDirection: "column", justifyContent: "center", alignItems: "center", position: "absolute", left: "-41px", top: "26px", width: "100px", padding: "7px", fontWeight: 500, boxShadow: "0 0 13px #0000001c", zIndex: "2000", borderRadius: "5px", backgroundColor: "white" }}>
                  <p style={{ cursor: "pointer" }} onClick={(e) => setCurrency("$")}>
                    $ USD
                  </p>
                  <p style={{ cursor: "pointer" }} onClick={(e) => setCurrency("£")}>
                    £ GBP
                  </p>
                  <p style={{ cursor: "pointer" }} onClick={(e) => setCurrency("A$")}>
                    A$ AUD
                  </p>
                  <p style={{ cursor: "pointer" }} onClick={(e) => setCurrency("¥")}>
                    ¥ JPY
                  </p>
                  <p style={{ cursor: "pointer" }} onClick={(e) => setCurrency("₽")}>
                    ₽ RUB
                  </p>
                </div>
              </div>
            </label>
          </div>
          {/* Cart  */}
          <button onClick={handleDisplayCart}>
            <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/20/000000/external-shopping-cart-miscellaneous-kiranshastry-lineal-kiranshastry.png" />
          </button>
        </div>
        {/*  */}
      </div>
      <div style={{ display: `${displayCart ? "block" : "none"}`, position: "fixed", top: "0", left: "0", zIndex: 1, width: "100vw", height: "100vh", backgroundColor: "rgba(57, 55, 72, 0.22)" }}></div>
      <MiniCart displayCart={displayCart} currency={currency} cartData={cartData} setCartData={setCartData} />
    </>
  );
};

export default HeaderProductsPage;
