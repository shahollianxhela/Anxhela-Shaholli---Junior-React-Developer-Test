import React, { useState, useEffect } from "react";
import "../styles/main.css";
import ImageGallery from "react-image-gallery";

const CartSingleComponent = ({ cartData, setCartData, currency }) => {
  ////////////////////
  // Set quantity to counter from cartData
  const [counter, setCounter] = useState(cartData.quantity);
  useEffect(() => {
    setCounter(cartData.quantity);
  }, [cartData.quantity]);
  ////////////////////

  ////////////////////
  // When counter change update cart data
  function handleQuantityPlus() {
    setCounter((prev) => prev + 1);
  }
  function handleQuantityMinus() {
    setCounter((prev) => prev - 1);
  }
  useEffect(() => {
    setCartData((prev) => ({ ...prev, [cartData.id]: { ...cartData, quantity: counter } }));
  }, [counter]);
  ////////////////////

  ////////////////////
  //  Add elements to images array, as ImageGallery component should has original & thumbnail for every slide show
  const [images, setImages] = useState([]);
  useEffect(() => {
    cartData.gallery.map((image) => setImages((prev) => [...prev, { original: image, thumbnail: image }]));
    return () => {
      setImages([]);
    };
  }, [cartData]);
  ////////////////////

  if (cartData.quantity <= 0) return null;
  return (
    <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #E5E5E5", paddingTop: "20px", marginBottom: "20px" }}>
      {/* Left Side */}
      <div>
        <div style={{ fontSize: "30px", fontWeight: "600", marginBottom: "16px" }}>{cartData.brand}</div>
        <div style={{ fontSize: "30px", marginBottom: "12px" }}>{cartData.name}</div>
        <div style={{ fontSize: "24px", fontWeight: "600", marginTop: "10px", marginBottom: "12px" }}>
          {`${currency} `}
          {cartData.prices.map((price) => (price.currency.symbol === currency ? price.amount : ""))}
        </div>
        <div style={{ marginTop: "23px" }}>
          {cartData.attributes[0]?.items?.map((item) => (
            <button key={item.id} style={{ filter: `${cartData.sizes.includes(item.id) ? "invert(1)" : "invert(0)"}`, backgroundColor: "white", cursor: "pointer", color: "black", border: "1px solid black", width: "63px", height: "45px", borderRadius: "0px", marginRight: "5px", fontSize: "16px" }}>
              {item.displayValue}
            </button>
          ))}
        </div>
      </div>
      {/*  */}

      {/* Right Side */}
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", marginRight: "12px" }}>
          <div onClick={handleQuantityPlus} style={{ border: " 1px solid", color: "black", width: "45px", height: "45px", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }}>
            <img src="https://img.icons8.com/windows/24/000000/plus-math.png" />
          </div>
          <div style={{ fontSize: "24px" }}>{cartData.quantity}</div>
          <div onClick={handleQuantityMinus} style={{ border: " 1px solid", color: "black", width: "45px", height: "45px", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }}>
            <img src="https://img.icons8.com/material-sharp/22/000000/minus.png" />
          </div>
        </div>
        <div style={{ width: "130px", display: "flex", alignItems: "center", border: "1px solid rgb(229, 233, 234)" }}>
          <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false} showNav={true} showThumbnails={false} />
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default CartSingleComponent;
