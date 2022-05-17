import React, { useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const [allProducts] = useState([
    { id: 101, name: "Samsung s30", price: 12500 },
    { id: 102, name: "Oppo f2", price: 11500 },
    { id: 103, name: "iphone ", price: 20500 },
  ]);
  return (
    <>
      <h1>Product List</h1>

      {allProducts.map((product) => (
        <ProductCard product={product} key={product.id}></ProductCard>
      ))}
    </>
  );
}
