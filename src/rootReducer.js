import { combineReducers } from 'redux';
import getProductsReducer from './shared/components/ProductsList/ProductsListReducer';
import getProductReducer from './components/ProductDetailPage/ProductDetailReducer';
import addProductReducer from './components/ProductsPage/ProductForm/ProductFormReducer';

export const initialState = {
  products: {
    isLoaded: false,
    data: null,
    hasError: null,
  },
};

const rootReducer = combineReducers({
  getProductsReducer,
  getProductReducer,
  addProductReducer,
});

export default rootReducer;
