import React, { PureComponent } from 'react';

function withLoading(Component) {

  class WithLoading extends PureComponent {

    render() {

      return ((this.props.isLoaded === false)
        ? <div><h2>Loading...</h2></div>
        : <Component {...this.props} />
      );

    }

  }

  WithLoading.displayName = `WithLoading(${Component.displayName || Component.name || 'Component'})`;

  return WithLoading;

}

export default withLoading;
