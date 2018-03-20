import React from 'react';
import './WithLoading.css';
// import { getAllProducts } from './../../_actions';

import { connect } from 'react-redux';
import {GET_PRODUCTS} from '../../_actions';

function withLoading(Component, dataUrl ) {

	class Loader extends React.Component {

		// constructor(props) {
    //
		// 	super(props);
		// }

		componentDidMount() {
      // this.props.dispatch(getAllProducts(dataUrl));
      this.fetchData();
		}

		fetchData() {
			fetch(dataUrl)
				.then((res) => res.json())
				.then(
					(result) => {

            this.props.dispatch({
              type: GET_PRODUCTS,
              data: result.data,
              isLoaded: true
            });
					},
					(error) => {
            console.log(error);
					}
				)
		}

		render() {

      if (this.props.isLoaded) {
				return <Component
					data={this.props.data}
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


  const mapStateToProps = state => {
    console.log(state);
    return {
      data: state.products.data,
      isLoaded: state.products.isLoaded
    }
  };

  Loader = connect(mapStateToProps)(Loader);

	return Loader;

}



export default withLoading;