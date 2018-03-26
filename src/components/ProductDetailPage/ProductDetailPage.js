import React, { Component } from 'react';
import withLoading from '../../shared/hoc/WithLoading/WithLoading';
import { getProduct } from '../../_actions/index';

class ProductDetailPage extends Component {

  constructor(props) {

    super(props);

    this.product = {};
    this.getProduct(props.data);

  }

  getProduct(productsList) {

    this.product = productsList
      .find(product => product.id === +this.props.match.params.id);

  }

  showProduct() {

    if (this.product) {

      const productKeys = this.product
        ? Object.keys(this.product)
        : null;

      const productValues = this.product
        ? Object.values(this.product)
        : null;

      return (
        productKeys.map((productProp, index) => (
          <tr key={productProp}>
            <th scope="row">{productProp}</th>
            <td>{productValues[index]}</td>
          </tr>
        ))
      );

    }

    return null;

  }

  render() {

    [this.product] = [this.props.data[0]];

    return (
      <div className="col-8 mx-auto mt-2">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Key</th>
              <th scope="col">Value</th>
            </tr>
          </thead>
          <tbody>
            {
              this.showProduct()
            }
          </tbody>
        </table>
      </div>
    );

  }

}

export default withLoading(ProductDetailPage, {
  get: [{
    url: '../json/Products.json',
    action: getProduct,
  }],
});
