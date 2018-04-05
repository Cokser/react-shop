import React, { PureComponent } from 'react';
import ProductCard from './ProductCard/ProductCard';
import withLoading from 'shared/hoc/WithLoading/WithLoading';

class ProductsList extends PureComponent {

  render() {

    return (
      <div className="row products-container">
        {this.props.products.data ? this.props.products.data.map(product => (
          <ProductCard
            key={product.id}
            goToDetail={(id) => {

              this.props.history.push(`/products/${id}`);

            }}
            product={product}
          />)) : null
        }
      </div>
    );

  }

}

export default withLoading(ProductsList);
