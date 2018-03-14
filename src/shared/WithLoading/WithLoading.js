import React from 'react';
import './WithLoading.css';

function withLoading(Component, dataUrl ) {

	class Loader extends React.Component {

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
							data: result.data
						});
					},
					(error) => {
            console.log(error);
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
					data={this.state.data}
					{...this.props} />
			}
			return (
				<button className="btn btn-sm btn-warning">
					<span className="glyphicon glyphicon-refresh glyphicon-refresh-animate" />
					Loading...
				</button>
			)
		}
	}

  Loader.displayName = `Loader(${Component.displayName || Component.name || 'Component'})`;
	return Loader;

}
export default withLoading;