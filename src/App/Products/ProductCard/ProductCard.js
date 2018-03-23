import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

import './ProductCard.css';

export default class ProductCard extends Component {

  constructor(props) {

    super(props);

    this.productKeys = Object.keys(props.product);
    this.productValues = Object.values(props.product);

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(e) {

    e.preventDefault();
    this.props.goToDetail(this.props.product.id);

  }

  render() {

    return (

      <div
        role="presentation"
        className="col-xs-12 col-sm-5 col-md-3 p-0"
        onClick={this.handleClick
        }
      >
        <article className="card product-item">
          <header className="card-header">
            <p className="card-title">{this.props.product.name}</p>
          </header>
          <section className="card-body">
            <dl styles="display: inline-block">
              {
                this.productKeys.map((productProp, index) => {

                  if (productProp === 'id' ||
                    productProp === 'name' ||
                    productProp === 'count') {

                    return null;

                  }

                  return (
                    <Fragment key={productProp}>
                      <dt className="card-text">{productProp}</dt>
                      <dd className="card-text">{this.productValues[index]}</dd>
                    </Fragment>
                  );

                })
              }
            </dl>
          </section>
          <footer className="card-footer text-muted">
            <p className="card-text">{this.props.product.count}</p>
          </footer>
        </article>
      </div>
    );

  }

}

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    count: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    size: PropTypes.number,
    weight: PropTypes.string,
    material: PropTypes.string,
  }).isRequired,
};
