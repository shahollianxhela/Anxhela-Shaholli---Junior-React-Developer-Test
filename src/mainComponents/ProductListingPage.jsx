import React from "react";
import CardProductPage from "../subComponents/CardProductPage";
// Apolo
import { useQuery } from "@apollo/client";
import { PRODUCTS } from "../gql";

const ProductLisitingPage = ({ currency, setSingleProductData, categoryType, setCartData, setCartSuccessMessage }) => {
  const { loading, error, data } = useQuery(PRODUCTS, {
    variables: { type: `${categoryType}` },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div>
      <p style={{ fontSize: "42px", fontFamily: "Raleway", margin: "0px 0px 103px 0px" }}>{data.category.name.toUpperCase()}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 356px)", gridGap: "40px" }}>
        {data.category.products.map((product) => (
          <CardProductPage key={product.id} currency={currency} productData={product} setSingleProductData={setSingleProductData} setCartData={setCartData} setCartSuccessMessage={setCartSuccessMessage} />
        ))}
      </div>
    </div>
  );
};

export default ProductLisitingPage;
