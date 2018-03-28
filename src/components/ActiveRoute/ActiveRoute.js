import React from 'react';
// TODO: isn't it a shared component?
const ActiveRoute = props => (
  <p className="m-0 navbar-brand">{props.location.pathname}</p>
);

export default ActiveRoute;
