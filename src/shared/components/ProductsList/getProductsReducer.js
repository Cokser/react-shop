import {
  GET_PRODUCTS_STARTED,
  GET_PRODUCTS_ERROR,
  RECEIVE_PRODUCTS,
} from './getProductsAction';
import { initialState } from '../../../rootReducer';

const getProductsReducer = (state = initialState, action) => {

  switch (action.type) {

    // --------------- GET PRODUCTS REDUCER --------------- //

    case GET_PRODUCTS_STARTED: {

      return {
        ...state,
        isLoaded: false,
      };

    }

    case GET_PRODUCTS_ERROR: {

      return [
        ...state,
        action.data,
      ];

    }

    case RECEIVE_PRODUCTS: {

      return {
        ...state,
        isLoaded: true,
        data: action.payload,
      };

    }

    default: {

      return state;

    }

  }

};

export default getProductsReducer;

