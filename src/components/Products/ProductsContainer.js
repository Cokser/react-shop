import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Products.css';
import ProductForm from './ProductForm/ProductForm';
import Modal from '../../shared/components/Modal/Modal';
import ProductCard from './ProductCard/ProductCard';
import withLoading from '../../shared/hoc/WithLoading/WithLoading';
import { addProduct, getProducts } from '../../_actions';


class Products extends Component {

  constructor(props) {

    super(props);

    this.state = {
      count: props.count,
      mode: props.mode,
      showModal: false,
    };

    this.handleHide = this.handleHide.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.goToProductPage = this.goToProductPage.bind(this);
    this.addProduct = this.addProduct.bind(this);

  }

  goToProductPage(id) {

    this.props.history.push(`/products/${id}`);

  }

  postFetchData(product) {

    // fetch('json/Products.json', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     'Products': this.state.Products
    //   })
    // })
    // .then((data) => console.log('god bless', data))
    this.props.dispatch(addProduct(product));

  }

  addProduct(newProduct) {

    this.postFetchData(newProduct);
    this.handleHide();

  }

  setId() {

    if (this.props.data.length === 0) {

      return 1;

    }
    return this.props.data[this.props.data.length - 1].id + 1;

  }

  showProducts() {

    const products = this.props.data.slice(0, this.state.count - 1);

    if (products.length > 0) {

      return (

        <div className="row products-container">
          {products.map(product => (<ProductCard
            key={product.id}
            goToDetail={this.goToProductPage}
            product={product}
          />))}
        </div>

      );

    }

    return null;

  }

  handleShow() {

    this.setState({ showModal: true });

  }

  handleHide() {

    this.setState({ showModal: false });

  }

  render() {

    const modal = this.state.showModal ? (
      <Modal>
        <div className="form-modal">
          <div
            className="modal-ovarlay"
            role="presentation"
            onClick={this.handleHide}
          />
          <div className="modal-body col-lg-4 col-md-6 col-xs-10">
            <ProductForm
              addSubmitted={this.addProduct}
              id={this.setId()}
            />
            <button
              className="btn btn-primary"
              onClick={this.handleHide}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    ) : null;

    const mode = this.state.mode === 'catalog' ? (
      <button
        type="button"
        className="btn btn-primary mx-auto"
        onClick={this.handleShow}
      >Show Modal
      </button>
    ) : null;

    return (

      <div className="container-fluid">
        {mode}
        {modal}
        <div className="container">
          {this.showProducts()}
        </div>
      </div>

    );

  }

}

Products = connect()(Products);

export default withLoading(Products, {
  get: [{
    url: '../json/Products.json',
    action: getProducts,
  }],
});
