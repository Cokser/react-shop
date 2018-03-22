import React from 'react';

const ActiveRoute = props => (
  <p className="m-0 navbar-brand">{props.location.pathname}</p>
);

export default ActiveRoute;
