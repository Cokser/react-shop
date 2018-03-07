import React from "react";
import { render } from "react-dom";
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import ProductsPage from './products-page/productsPage';
import Header from "./shared/header/header";
import HomePage from "./home-page/homePage";

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <main>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/productsPage' component={ProductsPage}/>
        </Switch>
      </main>
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById("root"));
