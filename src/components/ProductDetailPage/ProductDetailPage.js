import React, { Component } from 'react';

class ProductDetailPage extends Component {

  componentDidMount() {

    this.props.getProduct('../json/product.json');

  }

  showProduct() {

    if (this.props.data) {

      const productKeys = this.props.data
        ? Object.keys(this.props.data)
        : null;

      const productValues = this.props.data
        ? Object.values(this.props.data)
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

export default ProductDetailPage;
