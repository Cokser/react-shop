import React, { PureComponent } from 'react';
import ProductCard from './ProductCard/ProductCard';
import withLoading from '../../hoc/WithLoading/WithLoading';

class ProductsList extends PureComponent {

  render() {

    return (
      <div className="row products-container">
        {this.props.data ? this.props.data.map(product => (
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

// const ProductsList = props => (
//   <div className="row products-container">
//     {props.data ? props.data.map(product => (
//       <ProductCard
//         key={product.id}
//         goToDetail={(id) => {
//
//             props.history.push(`/products/${id}`);
//
//           }
//         }
//         product={product}
//       />)) : null
//     }
//   </div>
// );

export default withLoading(ProductsList);
