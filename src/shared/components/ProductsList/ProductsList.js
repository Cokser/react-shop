import React from 'react';
import ProductCard from './ProductCard/ProductCard';
import withLoading from '../../hoc/WithLoading/WithLoading';

const ProductsList = props => (
  <div className="row products-container">
    {props.data ? props.data.map(product => (
      <ProductCard
        key={product.id}
        goToDetail={(id) => {

            console.log(id, props);
            props.history.push(`/products/${id}`);

          }
        }
        product={product}
      />)) : null
    }
  </div>
);

export default withLoading(ProductsList);
