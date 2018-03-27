import React from 'react';
import ProductsContainer from '../Products/ProductsContainer';

const HomePage = props => (
  <div className="col-10 mx-auto">
    <h1 className="text-center">Finally at Home!</h1>
    <ProductsContainer count="4" mode="list" history={props.history} />
  </div>
);

export default HomePage;
