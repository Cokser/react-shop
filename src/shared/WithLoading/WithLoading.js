import React from 'react';
import { connect } from 'react-redux';

import './WithLoading.css';

function withLoading(Component, getList) {

  class Loader extends React.Component {

    constructor(props) {

      super(props);
      this.state = { isLoaded: false };

    }

    componentDidMount() {

      this.initData();

    }

    initData() {

      getList.get.forEach((getElement) => {

        this.fetchData(getElement);

      });

    }

    fetchData(getElement) {

      fetch(getElement.url)
        .then(res => res.json())
        .then(
          (result) => {

            this.setState({
              isLoaded: true,
            });
            this.props.dispatch(getElement.action(result.data));

          },
          (error) => {

            console.log(error);

          },
        );

    }

    render() {

      if (this.state.isLoaded) {

        return (<Component
          data={this.props.data}
          {...this.props}
        />);

      }

      return (
        <button className="btn btn-sm btn-warning">
          <span className="glyphicon glyphicon-refresh glyphicon-refresh-animate" />
          Loading...
        </button>
      );

    }

  }

  Loader.displayName = `Loader(${Component.displayName || Component.name || 'Component'})`;


  const mapStateToProps = state => ({
    data: state.products,
  });

  Loader = connect(mapStateToProps)(Loader);

  return Loader;

}


export default withLoading;
