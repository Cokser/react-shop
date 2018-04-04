import React, { PureComponent } from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';

import Header from '../../shared/components/Header/Header';
import store from '../../store';
import routes from '../../routes';


class App extends PureComponent {

  render() {

    return (

      <Provider store={store}>
        <BrowserRouter>
          <div className="container-fluid">
            <Header />
            <main className="row">
              <Switch>
                {renderRoutes(routes)}
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
