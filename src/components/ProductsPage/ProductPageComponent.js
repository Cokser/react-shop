import React from 'react';
import { connect } from 'react-redux';

import './ProductsPage.css';
import ProductsFormModal from '../../shared/components/ProductsFormModal/ProductsFormModal';
import ProductForm from '../ProductForm/ProductForm';
import ProductsListContainer from '../../shared/components/ProductsList/ProductsListContainer';
import { getProductsAction, addProductAction } from '../../shared/_actions';

class ProductPageComponent extends React.Component {

  state = {
    showModal: false,
  };

  componentDidMount() {

    const url = '../json/Products.json';
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
        <ProductsListContainer count="8" history={this.props.history} />
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

ProductPageComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductPageComponent);

export default ProductPageComponent;
