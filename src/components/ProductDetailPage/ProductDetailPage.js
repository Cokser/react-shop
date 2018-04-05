import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { renderRoutes } from 'react-router-config';

import { getProductAction } from 'src/rootActions';

class ProductDetailPage extends PureComponent {

  componentDidMount() {

    this.props.getProductAction('../json/product.json');

  }

  showProduct() {

    if (this.props.product.data) {

      const product = this.props.product.data;

      const productKeys = product
        ? Object.keys(product)
        : null;

      const productValues = product
        ? Object.values(product)
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

    return (
      <div className="col-8 mx-auto mt-2">
        {renderRoutes(this.props.route.routes)}
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

const mapStateToProps = state => ({
  product: state.getProductReducer.product,
});

const mapDispatchToProps = {
  getProductAction,
};

ProductDetailPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductDetailPage);

export default ProductDetailPage;
