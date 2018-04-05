import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { renderRoutes } from 'react-router-config';

import ProductsList from 'shared/components/ProductsList/ProductsList';
import { getProductsAction } from 'src/rootActions';

class HomePage extends PureComponent {

  componentWillMount() {

    const url = 'json/products.json';
    this.props.getProductsAction(url);

  }

  render() {

    return (
      <div className="col-10 mx-auto">
        {renderRoutes(this.props.route.routes)}
        <h1 className="text-center">Finally at Home!</h1>
        <ProductsList
          count="4"
          mode="list"
          products={this.props.products}
          history={this.props.history}
        />
      </div>
    );

  }

}

const mapStateToProps = state => ({
  products: state.getProductsReducer.products,
});

const mapDispatchToProps = {
  getProductsAction,
};

HomePage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);

export default HomePage;
