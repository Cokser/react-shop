import React from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';

import Header from '../../shared/components/Header/Header';
import ProductDetailContainer from '../ProductDetailPage/ProductDetailContainer';
import HomePageComponent from '../HomePage/HomePageComponent';
import ProductPageComponent from '../ProductsPage/ProductPageComponent';

const App = () => (

  <BrowserRouter>
    <div className="container-fluid">
      <Header />
      <main className="row">
        <Switch>
          <Route exact path="/" component={HomePageComponent} />
          <Route exact path="/products" component={ProductPageComponent} />
          <Route path="/products/:id" component={ProductDetailContainer} />
          <Redirect to="/" />
        </Switch>
      </main>
    </div>
  </BrowserRouter>

);

export default App;
