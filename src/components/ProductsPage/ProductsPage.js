import React from 'react';
import './ProductsPage.css';
import ProductsContainer from '../Products/ProductsContainer';

const ProductsPage = props => (
  <div className="col-10 mx-auto">
    <h1 className="text-center">Products Catalog!</h1>
    <ProductsContainer count="8" mode="catalog" history={props.history} />
  </div>
);

export default ProductsPage;
