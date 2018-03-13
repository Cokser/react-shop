import React from 'react';
import './productsPage.css';
import ProductsComponent from "../products/products.component";

class ProductsPage extends React.Component {

  // constructor(props) {
	//
  //   super(props);
  // }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {

    return (
      <div>
        <h1>Products Catalog!</h1>
        <ProductsComponent count="8" mode="catalog" history={this.props.history} />
      </div>
    );
  }
}

export default ProductsPage;