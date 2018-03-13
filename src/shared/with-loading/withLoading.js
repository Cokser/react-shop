import React from 'react';
import './withLoading.css';

function WithLoading(Component, dataUrl ) {

	return class Loader extends React.Component {

		constructor(props) {

			super(props);

			this.state = {
				data: [],
				isLoaded: false
			};
		}

		componentDidMount() {
			this.fetchData();
		}

		fetchData() {
			fetch(dataUrl)
				.then((res) => res.json())
				.then(
					(result) => {
						this.setState({
							isLoaded: true,
							data: result.products
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

		render() {
			if (this.state.isLoaded) {
				return <Component
					products={this.state.data}
					{...this.props} />
			}
			return (
				<button className="btn btn-sm btn-warning">
				<span className="glyphicon glyphicon-refresh glyphicon-refresh-animate">
				</span> Loading...</button>
			)
		}
	}
}
export default WithLoading;