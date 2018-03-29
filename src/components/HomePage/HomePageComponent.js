import React from 'react';
import { connect } from 'react-redux';

import ProductsListContainer from '../../shared/components/ProductsList/ProductsListContainer';
import { getProductsAction } from '../../shared/_actions';

class HomePageComponent extends React.Component {

  componentDidMount() {

    const url = '../json/Products.json';
    this.props.getProductsAction(url);

  }

  render() {

    return (
      <div className="col-10 mx-auto">
        <h1 className="text-center">Finally at Home!</h1>
        <ProductsListContainer count="4" mode="list" history={this.props.history} />
      </div>
    );

  }

}

const mapStateToProps = state => ({
  data: state.getProductsReducer.data,
  isLoaded: state.getProductsReducer.isLoaded,
  hasError: state.getProductsReducer.hasError,
});

const mapDispatchToProps = {
  getProductsAction,
};

HomePageComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePageComponent);

export default HomePageComponent;
