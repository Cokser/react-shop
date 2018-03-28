// TODO: make rows in import to take similar width
import {
  GET_PRODUCTS_STARTED,
  GET_PRODUCTS_ERROR,
  RECEIVE_PRODUCTS,
  RECEIVE_PRODUCT,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_STARTED, ADD_PRODUCT_STARTED, ADD_PRODUCT_ERROR, PRODUCT_ADDED,
} from '../_actions';

const initialState = {
  isLoading: false,
  loaded: false,
  data: null,
  error: null,
};


// TODO: use ES6 arrow function
export default function products(state = initialState, action) {

  // TODO: place reducers in a separate files or functions
  switch (action.type) {

    // --------------- ADD PRODUCT REDUCER --------------- //

    case ADD_PRODUCT_STARTED: {

      return {
        ...state,
        isLoading: true,
        loaded: false,
      };

    }

    case ADD_PRODUCT_ERROR: {

      return [
        ...state,
        action.data,
      ];

    }

    case PRODUCT_ADDED: {

      return {
        ...state,
        isLoading: false,
        loaded: true,
        data: action.payload,
      };

    }

    // --------------- GET PRODUCTS REDUCER --------------- //

    case GET_PRODUCTS_STARTED: {

      return {
        ...state,
        isLoading: true,
        loaded: false,
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
        isLoading: false,
        loaded: true,
        data: action.payload,
      };

    }

    // --------------- GET PRODUCT REDUCER --------------- //

    case GET_PRODUCT_STARTED: {

      return {
        ...state,
        isLoading: true,
        loaded: false,
      };

    }

    case GET_PRODUCT_ERROR: {

      return [
        ...state,
        action.payload,
      ];

    }

    case RECEIVE_PRODUCT: {

      return {
        ...state,
        isLoading: false,
        loaded: true,
        product: action.payload,
      };

    }

    default: {

      return state;

    }

  }

}
