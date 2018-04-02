import React, { PureComponent } from 'react';

class ActiveRoute extends PureComponent {

  render() {

    return (
      <p className='m-0 navbar-brand'>
        {this.props.location.pathname}
      </p>
    );

  }

}

export default ActiveRoute;
