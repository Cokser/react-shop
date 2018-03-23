import React, { Component } from 'react';
import withLoading from '../../shared/WithLoading/WithLoading';
import { getProduct } from './../../_actions';

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

  render() {

    const productKeys = Object.keys(this.product);
    const productValues = Object.values(this.product);

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
              productKeys.map((productProp, index) => (
                <tr key={productProp}>
                  <th scope="row">{productProp}</th>
                  <td>{productValues[index]}</td>
                </tr>
              ))
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
