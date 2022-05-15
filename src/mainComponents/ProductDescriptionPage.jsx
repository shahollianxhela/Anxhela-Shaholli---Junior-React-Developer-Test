import React, { useEffect, useState } from "react";
import "../styles/main.css";
import ImageGallery from "react-image-gallery";
import { Link } from "react-router-dom";

const ProductDescriptionPage = ({ currency, singleProductData, cartData, setCartData, setCartSuccessMessage }) => {
  const [images, setImages] = useState([]);

  ///////////////
  // Add elements to images array, as ImageGallery component should has original & thumbnail for every slide show
  useEffect(() => {
    singleProductData.gallery.map((image) => setImages((prev) => [...prev, { original: image, thumbnail: image }]));
    return () => {
      setImages([]);
    };
  }, [singleProductData]);
  ///////////////

  ///////////////
  // Add to cart function
  function handleAddToCart() {
    setCartData((prev) => ({
      ...prev,
      [singleProductData.id]: { ...singleProductData, quantity: 1 },
    }));
    setCartSuccessMessage("block");
  }
  ///////////////

  return (
    <>
      <Link to="/" style={{ textDecoration: "none", position: "fixed", top: "13px", left: "31px", zIndex: "2000" }}>
        <img src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/50/000000/external-left-arrows-kmg-design-glyph-kmg-design-1.png" />
      </Link>
      <div style={{ display: "flex", marginBottom: "73px", height: "90vh", paddingRight: "100px" }}>
        {/* Left Side  */}
        <div style={{ width: "500px", marginBottom: "72px" }}>
          <ImageGallery items={images} thumbnailPosition={"left"} showFullscreenButton={false} showPlayButton={false} showNav={false} />
        </div>
        {/*  */}

        {/* Right Side  */}
        <div style={{ width: "300px", marginLeft: "70px" }}>
          <div style={{ fontSize: "30px", fontWeight: "600", marginBottom: "20px" }}>{singleProductData.brand}</div>
          <div style={{ fontSize: "30px" }}>{singleProductData.name}</div>
          <div>
            {singleProductData.attributes[0]?.items.length > 0 && <div style={{ fontSize: "18px", fontWeight: "600", marginTop: "43px", marginBottom: "10px" }}>SIZE:</div>}
            <div>
              {singleProductData.attributes[0]?.items?.map((item) => (
                <button key={item.id} style={{ filter: `${cartData[singleProductData.id]?.sizes?.includes(item.id) ? "invert(1)" : "invert(0)"}`, cursor: "default", backgroundColor: "white", color: "black", border: "1px solid black", width: "63px", height: "45px", borderRadius: "0px", marginRight: "5px", fontSize: "16px" }}>
                  {item.displayValue}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: "18px", fontWeight: "600", marginTop: "43px" }}>PRICE:</div>
            <div style={{ fontSize: "24px", fontWeight: "600", marginTop: "10px" }}>{singleProductData.prices.map((price) => (price.currency.symbol === currency ? price.amount : ""))}</div>
          </div>
          <button onClick={handleAddToCart} style={{ marginTop: "20px", width: "100%", height: "52px", backgroundColor: "#5ECE7B", color: "white" }}>
            ADD TO CART
          </button>
          <div style={{ marginTop: "40px", fontSize: "16px" }}>{singleProductData.description.replace(/<[^>]+>/g, "")}</div>
        </div>
        {/*  */}
      </div>
    </>
  );
};

export default ProductDescriptionPage;
