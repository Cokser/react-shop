import React, { Component } from 'react';

import './Products.css';
import { ProductForm, ProductCard } from './';
import Modal from '../../shared/components/Modal/Modal';
import withLoading from '../../shared/hoc/WithLoading/WithLoading';

class Products extends Component {

  state = {
    showModal: false,
  };

  componentDidMount() {

    const url = '../json/Products.json';
    this.props.getProducts(url);

  }

  goToProductPage = (id) => {

    this.props.history.push(`/products/${id}`);

  };

  addProduct = (newProduct) => {

    this.props.addProduct(newProduct, '../json/Products.json');
    this.handleHide();

  };

  setId() {

    if (this.props.data.length === 0) {

      return 1;

    }
    return this.props.data[this.props.data.length - 1].id + 1;

  }

  showProducts() {


    const products = (this.props.data)
      ? this.props.data.slice(0, this.props.count - 1)
      : null;

    if (products) {

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

  handleShow = () => this.setState({ showModal: true });


  handleHide = () => this.setState({ showModal: false });

  render() {

    console.log(this.props);

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

    const mode = this.props.mode === 'catalog' ? (
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

export default withLoading(Products);
