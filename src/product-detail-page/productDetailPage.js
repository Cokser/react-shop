import React, { Fragment } from 'react';
import './productDetailPage.css';

export default class ProductDetailPage extends React.Component {

  constructor(props) {

    super(props);

		this.state = {
			isLoaded: false,
			product: {}
		}
	}

  componentDidMount() {
		this.fetchData();
  }

	fetchData() {
		fetch('../json/products.json')
			.then((res) => res.json())
			.then(
				(result) => {

					const currentProduct = result.products
						.find( product => {
							return product.id === +this.props.match.params.id;
						});

					this.setState({
						isLoaded: true,
						product: currentProduct
					});
				},
				(error) => {
					console.log('error', error);
					this.setState({
						isLoaded: true,
						error
					});
				}
			)
	}

  componentWillUnmount() {
  }

  render() {

		const productKeys = Object.keys(this.state.product);
		const productValues = Object.values(this.state.product);

    return (
      <div className="container">
				{
					productKeys.map((productProp, index) => {
							return (
								<Fragment key={index}>
									<dt className="card-text" >{productProp}</dt>
									<dd className="card-text" >{productValues[index]}</dd>
								</Fragment>
							)
					})
				}
      </div>
    );
  }
}