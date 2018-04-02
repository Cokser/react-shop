import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import './ProductsPage.css';
import ProductsFormModal from '../../shared/components/Modal/FormModal/FormModal';
import ProductForm from './ProductForm/ProductForm';
import ProductsList from '../../shared/components/ProductsList/ProductsList';
import { getProductsAction, addProductAction } from '../../rootActions';

class ProductsPage extends PureComponent {

  state = {
    showModal: false,
  };

  componentWillMount() {

    const url = '../json/products.json';
    this.props.getProductsAction(url);

  }

  addProduct = (newProduct) => {

    this.props.addProductAction(newProduct, '../json/Products.json');
    this.handleHide();

  };

  handleShow = () => this.setState({ showModal: true });

  handleHide = () => this.setState({ showModal: false });

  render() {

    return (
      <div className="col-10 mx-auto">
        <h1 className="text-center">Products Catalog!</h1>
        <button
          type="button"
          className="btn btn-primary mx-auto"
          onClick={this.handleShow}
        >Add Product
        </button>
        <ProductsFormModal showModal={this.state.showModal}>
          <ProductForm
            addSubmitted={this.addProduct}
          />
        </ProductsFormModal>
        <ProductsList
          data={this.props.data}
          isLoaded={this.props.isLoaded}
          count="8"
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
  addProductAction,
};

ProductsPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductsPage);

export default ProductsPage;
