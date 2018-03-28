import React from 'react';

function withLoading(Component) {

  const WithLoading = ({ isLoaded, ...props }) => {

    console.log('WithLoading.render', props, isLoaded);
    return (
      isLoaded ? <div><h2>Loading...</h2></div> : <Component {...props} />
    );

  };

  WithLoading.displayName = `WithLoading(${Component.displayName || Component.name || 'Component'})`;

  return WithLoading;

}

export default withLoading;
