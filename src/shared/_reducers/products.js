import {
  GET_PRODUCTS_STARTED,
  GET_PRODUCTS_ERROR,
  RECEIVE_PRODUCTS,
  RECEIVE_PRODUCT,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_STARTED, ADD_PRODUCT_STARTED, ADD_PRODUCT_ERROR, PRODUCT_ADDED,
} from '../_actions';

const initialState = {
  isLoaded: false,
  data: null,
  hasError: null,
};


export default function products(state = initialState, action) {


  switch (action.type) {

    // --------------- ADD PRODUCT REDUCER --------------- //

    case ADD_PRODUCT_STARTED: {

      return {
        ...state,
        isLoading: true,
        isLoaded: false,
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
        isLoaded: true,
        data: action.payload,
      };

    }

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

    // --------------- GET PRODUCT REDUCER --------------- //

    case GET_PRODUCT_STARTED: {

      return {
        ...state,
        isLoading: true,
        isLoaded: false,
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
        isLoaded: true,
        product: action.payload,
      };

    }

    default: {

      return state;

    }

  }

}
