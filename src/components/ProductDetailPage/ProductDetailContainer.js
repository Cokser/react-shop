import { connect } from 'react-redux';
import { getProduct } from '../../shared/_actions';
import ProductDetailPage from './ProductDetailPage';

const mapStateToProps = state => ({
  data: state.products.product,
});

const mapDispatchToProps = {
  getProduct,
};

const ProductDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductDetailPage);

export default ProductDetailContainer;
