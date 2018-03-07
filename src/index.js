import React from "react";
import { render } from "react-dom";
import { ProductsComponent } from './products';
import Header from "./shared/header/header";

const App = () => (
  <div>
    <Header />
    <ProductsComponent />
  </div>
);

render(<App />, document.getElementById("root"));
