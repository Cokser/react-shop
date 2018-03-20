import React from 'react';
import { connect } from 'react-redux';

import './Products.css';
import ProductForm from './ProductForm/ProductForm';
import Modal from '../../shared/Modal/Modal';
import ProductCard from './ProductCard/ProductCard';
import withLoading from '../../shared/WithLoading/WithLoading';



class Products extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      count: props.count,
      mode: props.mode,
      error: null,
      isLoaded: false,
      showModal: false,
    };

    this.products = props.data;
	}

	componentWillReceiveProps(nextProps) {
    this.products = nextProps.data;
	}

  componentDidMount() {
    const store = this.context;
    console.log(this.props, store);
  }
  
  componentDidCatch(error) {
    this.setState({ error })
  }

	goToProductPage(id) {
		this.props.history.push(`/products/${id}`);
	}

  postFetchData() {
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
  }

  addProduct(newProduct) {

    this.products = this.products.concat(newProduct);

    this.postFetchData();
    this.handleHide();
  }

  setId() {

    if (this.products.length === 0) {
      return 1;
    } else {
      return this.products[this.products.length - 1].id + 1
    }
  }

  showProducts() {

    let products = this.products.slice(0,this.state.count-1);

    if (products.length > 0 ) {
      return (

        <div className="row products-container">
          {products.map((product) => {
            return <ProductCard
              key={product.id}
              goToDetail={this.goToProductPage.bind(this)}
              product={product} />;
          })}
        </div>

      );
    }
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
        <div className="form-modal" >
          <div className="modal-ovarlay" onClick={this.handleHide.bind(this)} />
          <div className="modal-body col-lg-4 col-md-6 col-xs-10" >
            <ProductForm
              addSubmitted={this.addProduct.bind(this)}
              id={this.setId()}
            />
            <button
              className="btn btn-primary"
              onClick={this.handleHide.bind(this)}>
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    ) : null;

    const mode = this.state.mode === 'catalog' ? (
        <button type="button"
                className="btn btn-primary mx-auto"
                onClick={this.handleShow.bind(this)}>Show Modal
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

    )
  }
}

Products = connect()(Products);

export default withLoading(Products, 'json/products.json');