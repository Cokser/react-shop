import { combineReducers } from 'redux';
import getProductsReducer from '../components/ProductsList/getProductsReducer';
import getProductReducer from '../../components/ProductDetailPage/getProductReducer';
import addProductReducer from '../../components/ProductsPage/addProductRaducer';

export const initialState = {
  isLoaded: false,
  data: null,
  hasError: null,
};

const rootReducer = combineReducers({
  getProductsReducer,
  getProductReducer,
  addProductReducer,
});

export default rootReducer;
