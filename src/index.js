import React from "react";
import { render } from "react-dom";
import { ProductsComponent } from './products';

const App = () => (
  <div>
    <h2 className="alert alert-primary" role="alert">
      Shop Application
    </h2>
    <ProductsComponent />
    
  </div>
);

render(<App />, document.getElementById("root"));
