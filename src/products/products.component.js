import React from 'react';
import './products.component.css';
import { ProductFormComponent } from './index.js';
import Modal from '../shared/modal/modal';
import ProductListItemComponent from "./product-list/product-list-item/product-list-item.component";

export default class ProductsComponent extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      count: props.count,
      mode: props.mode,
      error: null,
      isLoaded: false,
      showModal: false,
      products: []
    };
	}
  
  componentDidCatch(error) {
    this.setState({ error })
  }


	goToProductPage(id) {
		this.props.history.push(`/products/${id}`);
	}

	componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch('json/products.json')
      .then((res) => res.json())
      .then(
      (result) => {
        let countedProducts = result.products.slice(0,this.state.count-1);
          this.setState({
          isLoaded: true,
          products: countedProducts
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
      )
  }

  postFethcData() {
    // fetch('json/products.json', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     'products': this.state.products
    //   })
    // })
    // .then((data) => console.log('god bless', data))
  }

  addProduct(newProduct) {

    let currentState = Object.assign(this.state);
    let products = currentState.products.concat(newProduct);
    
    this.setState({
      products: products
    });

    this.postFethcData();
    this.handleHide();
  }

  setId() {
    if (this.state.products.length === 0) {
      return 1;
    } else {
      return this.state.products[this.state.products.length - 1].id + 1
    }
  }

  showProducts() {
    if (this.state.products.length > 0 ) {
      return (
				<div className="row products-container">
					{this.state.products.map((product) => {
						return <ProductListItemComponent
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
            <ProductFormComponent
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
                className="btn btn-primary"
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
