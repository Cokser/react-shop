import { connect } from 'react-redux';
import { addProduct, getProducts } from '../../_actions';

import Products from './Products';

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
