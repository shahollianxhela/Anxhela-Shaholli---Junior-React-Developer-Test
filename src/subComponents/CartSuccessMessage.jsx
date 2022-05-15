import React, { useEffect } from "react";

const CartSuccessMessage = ({ cartSuccessMessage, setCartSuccessMessage }) => {
  //////////////////////
  // When display change, return it none after 1500s
  useEffect(() => {
    setTimeout(() => {
      setCartSuccessMessage("none");
    }, 1500);
  }, [cartSuccessMessage]);
  //////////////////////

  return <p style={{ opacity: `${cartSuccessMessage === "none" ? 0 : 1}`, padding: `${cartSuccessMessage === "none" ? 0 : "20px 0px"}`, width: "100vw", position: "fixed", top: 80, left: 0, zIndex: 1000, backgroundColor: "#62ce7b", color: "white", fontWeight: 600, padding: "12px", letterSpacing: "3px", textAlign: "center", borderRadius: "3px", transition: "all 0.3s linear 0s" }}> Added To The Cart </p>;
};

export default CartSuccessMessage;
