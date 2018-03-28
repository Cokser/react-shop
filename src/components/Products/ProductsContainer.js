import { connect } from 'react-redux';
import { addProduct, getProducts } from '../../shared/_actions';

import Products from './Products';

// TODO: pass isLoading and hasError also
const mapStateToProps = state => ({
  data: state.products.data,
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
