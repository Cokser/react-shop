import {
  GET_PRODUCT_ERROR,
  GET_PRODUCT_STARTED,
  RECEIVE_PRODUCT,
} from './getProductAction';
import { initialState } from '../../shared/_reducers/index';


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
