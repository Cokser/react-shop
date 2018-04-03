import React, { PureComponent } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from '../../shared/components/Header/Header';
import HomePage from '../HomePage/HomePage';
import ProductsPage from '../ProductsPage/ProductsPage';
import ProductDetailPage from '../ProductDetailPage/ProductDetailPage';
import store from '../../store';

class App extends PureComponent {

  render() {

    return (

      <Provider store={store}>
        <BrowserRouter>
          <div className='container-fluid'>
            <Header />
            <main className='row'>
              <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/products' component={ProductsPage} />
                <Route path='/products/:id' component={ProductDetailPage} />
                <Redirect to='/' />
              </Switch>
            </main>
          </div>
        </BrowserRouter>
      </Provider>
    );

  }

}

// const App = () => (
//
//   <BrowserRouter>
//     <div className="container-fluid">
//       <Header />
//       <main className="row">
//         <Switch>
//           <Route exact path="/" component={HomePage} />
//           <Route exact path="/products" component={ProductsPage} />
//           <Route path="/products/:id" component={ProductDetailPage} />
//           <Redirect to="/" />
//         </Switch>
//       </main>
//     </div>
//   </BrowserRouter>
//
// );

export default App;
