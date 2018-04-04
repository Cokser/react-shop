import {
  GET_PRODUCT_ERROR,
  GET_PRODUCT_STARTED,
  RECEIVE_PRODUCT,
} from './ProductDetailAction';
import { initialState } from 'src/rootReducer';


const getProductReducer = (state = initialState, action) => {

  switch (action.type) {

    // --------------- GET PRODUCT REDUCER --------------- //

    case GET_PRODUCT_STARTED: {

      return {
        ...state,
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

      console.log({
        ...state,
        isLoaded: true,
        data: action.payload,
      });

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

export default getProductReducer;
