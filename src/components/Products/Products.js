import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Products.css';
// TODO: if you have barrel file you can import with tree-shaking { one, two }
import ProductForm from './ProductForm/ProductForm';
import Modal from '../../shared/components/Modal/Modal';
import ProductCard from './ProductCard/ProductCard';
// import withLoading from '../../shared/hoc/WithLoading/WithLoading';
// import { addProduct, getProducts } from '../../_actions';


class Products extends Component {
  // TODO: new way of work with static properties
  /*state = {
      showModal: false
  }*/

  constructor(props) {

    super(props);

    // TODO: you don't need to save count or mode to props
    this.state = {
      count: props.count,
      mode: props.mode,
      showModal: false,
    };

    // TODO: it can be done new way without bind
    this.handleHide = this.handleHide.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.goToProductPage = this.goToProductPage.bind(this);
    this.addProduct = this.addProduct.bind(this);

  }

  componentDidMount() {

    const url = '../json/Products.json';
    this.props.getProducts(url);

  }

  // TODO: new way of work with static properties
  /*goToProductPage = (id) => {

      this.props.history.push(`/products/${id}`);

  }*/

  goToProductPage(id) {

    this.props.history.push(`/products/${id}`);

  }

  addProduct(newProduct) {

    this.props.addProduct(newProduct, '../json/Products.json');
    this.handleHide();

  }

  setId() {

    if (this.props.data.length === 0) {

      return 1;

    }
    return this.props.data[this.props.data.length - 1].id + 1;

  }

  showProducts() {

    const products = (this.props.data)
      ? this.props.data.slice(0, this.state.count - 1)
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

  handleShow() {

    this.setState({ showModal: true });

  }

  handleHide() {

    this.setState({ showModal: false });

  }

  render() {

    // TODO: do not declare functions in render() because they will fire on each render
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

// TODO: you should connect it through Products Container, why double connect?
Products = connect()(Products);

export default Products;

// export default withLoading(Products, {
//   get: [{
//     url: '../json/Products.json',
//     action: getProducts,
//   }],
// });
