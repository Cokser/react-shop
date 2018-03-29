import { connect } from 'react-redux';

import ProductsList from './ProductsList';

const mapStateToProps = state => ({
  data: state.getProductsReducer.data,
  isLoaded: state.getProductsReducer.isLoaded,
});

const ProductsListContainer = connect(mapStateToProps)(ProductsList);

export default ProductsListContainer;
