import React from 'react';
import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom';

import ProductsPage from './ProductsPage/ProductsPage';
import ProductDetailPage from './ProductDetailPage/ProductDetailPage';
import HomePage from './HomePage/HomePage';
import Header from '../shared/Header/header';


class App extends React.Component {

  constructor(props) {

    super(props);
    console.log(props);

  }

  // componentDidMount(error) {
  //
  // }

  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid">
          <Header/>
          <main className="row">
            <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route exact path="/products" component={ProductsPage}/>
              <Route path="/products/:id" component={ProductDetailPage}/>
              <Redirect to="/"/>
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;