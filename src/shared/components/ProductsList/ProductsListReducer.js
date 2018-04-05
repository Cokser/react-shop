import {
  GET_PRODUCTS_STARTED,
  GET_PRODUCTS_ERROR,
  RECEIVE_PRODUCTS,
} from './ProductsListAction';
import { initialState } from 'src/rootReducer';

const getProductsReducer = (state = initialState, action) => {

  switch (action.type) {

    // --------------- GET PRODUCTS REDUCER --------------- //

    case GET_PRODUCTS_STARTED: {

      return {
        ...state.products,
        products: {
          isLoaded: false,
        },

      };

    }

    case GET_PRODUCTS_ERROR: {

      return {
        ...state.products,
        products: {
          hasError: action.payload,
        },

      };

    }

    case RECEIVE_PRODUCTS: {

      return {
        ...state.products,
        products: {
          isLoaded: true,
          data: action.payload,
        },
      };

    }

    default: {

      return state;

    }

  }

};

export default getProductsReducer;

