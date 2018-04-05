import {
  GET_PRODUCT_ERROR,
  GET_PRODUCT_STARTED,
  RECEIVE_PRODUCT,
} from './ProductDetailAction';
// import { initialState } from 'src/rootReducer';
const initialState = {
  product: {
    isLoaded: false,
    data: null,
    hasError: null,
  },
};

const getProductReducer = (state = initialState, action) => {

  switch (action.type) {

    // --------------- GET PRODUCT REDUCER --------------- //

    case GET_PRODUCT_STARTED: {

      return {
        ...state.product,
        product: {
          isLoaded: false,
        },

      };

    }

    case GET_PRODUCT_ERROR: {

      return {
        ...state.product,
        product: {
          hasError: action.payload,
        },

      };

    }

    case RECEIVE_PRODUCT: {

      return {
        ...state.product,
        product: {
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

export default getProductReducer;
