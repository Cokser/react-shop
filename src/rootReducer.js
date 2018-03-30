import { combineReducers } from 'redux';
import getProductsReducer from './shared/components/ProductsList/getProductsReducer';
import getProductReducer from './components/ProductDetailPage/getProductReducer';
import addProductReducer from './components/ProductsPage/ProductForm/addProductRaducer';

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
