import React from "react";
import "./product-list.component.css";
import { ProductListItemComponent } from "./..";

const ProductListComponent = props => {
  return (
    <div className="row products-container">
      {props.productList.map((product) => {
        return <ProductListItemComponent
          key={product.id}
          product={product} />;
      })}
    </div>
  );
};

export default ProductListComponent;
