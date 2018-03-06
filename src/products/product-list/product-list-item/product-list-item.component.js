import React, {Fragment} from "react";
import PropTypes from 'prop-types';
import "./product-list-item.component.css";

export default class ProductListItemComponent extends React.Component {

  constructor(props) {
    super(props);

    this.productKeys = Object.keys(props.product);
    this.productValues = Object.values(props.product);
  }

  render () {
    return (
      <div className="col-xs-12 col-sm-5 col-md-3 p-0">
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
                    productProp === 'count' ) {
                    return null;
                  } else {
                    return (
                      <Fragment key={index}>
                        <dt className="card-text" >{productProp}</dt>
                        <dd className="card-text" >{this.productValues[index]}</dd>
                      </Fragment>
                    )
                  }
                })
              }
            </dl>
          </section>
          <footer className="card-footer text-muted">
            <p className="card-text">{this.props.product.count}</p>
          </footer>
        </article>
      </div>
    )
  }
}

ProductListItemComponent.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    count: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    size: PropTypes.number,
    weight: PropTypes.string,
    material: PropTypes.string
  }) 
}
