import React, { useState } from "react";
import CartPage from "./mainComponents/CartPage";
import ProductListingPage from "./mainComponents/ProductListingPage";
import ProductDescriptionPage from "./mainComponents/ProductDescriptionPage";
import HeaderProductsPage from "./subComponents/HeaderProductsPage";

// React Router
import { Routes, Route } from "react-router-dom";
import CartSuccessMessage from "./subComponents/CartSuccessMessage";

const App = () => {
  const [categoryType, setCategoryType] = useState("");
  const [singleProductData, setSingleProductData] = useState({});
  const [cartData, setCartData] = useState({});
  const [cartSuccessMessage, setCartSuccessMessage] = useState("none");
  const [currency, setCurrency] = useState("$");

  return (
    <div style={{ fontFamily: "Raleway" }}>
      <HeaderProductsPage setCurrency={setCurrency} currency={currency} setCategoryType={setCategoryType} setCartData={setCartData} cartData={cartData} />
      <CartSuccessMessage cartSuccessMessage={cartSuccessMessage} setCartSuccessMessage={setCartSuccessMessage} />
      <div style={{ padding: "80px 10px 10px 101px" }}>
        <Routes>
          <Route path="/" element={<ProductListingPage setSingleProductData={setSingleProductData} currency={currency} categoryType={categoryType} setCartData={setCartData} setCartSuccessMessage={setCartSuccessMessage} />} />
          <Route path={`/${singleProductData.id}`} element={<ProductDescriptionPage singleProductData={singleProductData} currency={currency} cartData={cartData} setCartData={setCartData} setCartSuccessMessage={setCartSuccessMessage} />} />
          <Route path="/cart" element={<CartPage currency={currency} cartData={cartData} setCartData={setCartData} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
