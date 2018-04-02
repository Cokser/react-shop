import React from 'react';
import ProductsComponent from '../Products/Products';

const HomePage = (props) => (
	<div className="col-10 mx-auto">
		<h1 className="text-center">Finally You Back to me!</h1>
		<ProductsComponent count="4" mode="list" history={props.history} />
	</div>
);

export default HomePage;