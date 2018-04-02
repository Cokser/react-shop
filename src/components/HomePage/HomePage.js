import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import ProductsList from '../../shared/components/ProductsList/ProductsList';
import { getProductsAction } from '../../rootActions';

class HomePage extends PureComponent {

  componentWillMount() {

    const url = 'json/products.json';
    this.props.getProductsAction(url);

  }

  render() {

    return (
      <div className='col-10 mx-auto'>
        <h1 className='text-center'>Finally at Home!</h1>
        <ProductsList
          count='4'
          mode='list'
          data={this.props.data}
          isLoaded={this.props.isLoaded}
          history={this.props.history}
        />
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

HomePage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);

export default HomePage;
