import { connect } from 'react-redux';
import { getProductAction } from '../../shared/_actions';
import ProductDetailPage from './ProductDetailPage';

const mapStateToProps = state => ({
  data: state.getProductReducer.product,
  isLoaded: state.getProductReducer.isLoaded,
  hasError: state.getProductReducer.hasError,
});

const mapDispatchToProps = {
  getProductAction,
};

const ProductDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductDetailPage);

export default ProductDetailContainer;
