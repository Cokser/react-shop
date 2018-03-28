import { connect } from 'react-redux';
import { addProduct, getProducts } from '../../shared/_actions';

import Products from './Products';
// import withLoading from '../../shared/hoc/WithLoading/WithLoading';

const mapStateToProps = state => ({
  data: state.products.data,
  isLoading: state.products.isLoading,
  isLoaded: state.products.isLoaded,
  hasError: state.products.hasError,
});

const mapDispatchToProps = {
  getProducts,
  addProduct,
};

const ProductsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products);

export default ProductsContainer;
