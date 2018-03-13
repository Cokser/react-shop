import React from "react";
import { render } from "react-dom";
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import ProductsPage from './products-page/productsPage';
import Header from "./shared/header/header";
import HomePage from "./home-page/homePage";
import ProductDetailPage from "./product-detail-page/productDetailPage";

const App = () => (
	<BrowserRouter>
		<div className="container-fluid">
			<Header />
			<main>
				<Switch>
					<Route exact path='/' component={HomePage}/>
					<Route exact path='/products' component={ProductsPage}/>
					<Route path='/products/:id' component={ProductDetailPage}/>
				</Switch>
			</main>
		</div>
	</BrowserRouter>
	);
render(<App />, document.getElementById("root"));
