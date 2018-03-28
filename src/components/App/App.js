import React from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';

import ProductsPage from '../ProductsPage/ProductsPage';
import HomePage from '../HomePage/HomePage';
import Header from '../../shared/components/Header/Header';
import ProductDetailContainer from '../ProductDetailPage/ProductDetailContainer';

const App = () => (

  <BrowserRouter>
    <div className="container-fluid">
      <Header />
      <main className="row">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/products" component={ProductsPage} />
          <Route path="/products/:id" component={ProductDetailContainer} />
          <Redirect to="/" />
        </Switch>
      </main>
    </div>
  </BrowserRouter>

);

export default App;
