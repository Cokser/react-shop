import React from 'react';
import './homePage.css';
import ProductsComponent from "../products/products.component";

export default class HomePage extends React.Component {

	// constructor(props) {
	//
   //  super(props);
	//
	// }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {

    return (
      <div>
          <h1>Finally at Home!</h1>
          <ProductsComponent count="4" mode="list" history={this.props.history} />
      </div>
    );
  }
}