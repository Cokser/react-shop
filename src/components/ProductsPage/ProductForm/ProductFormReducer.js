import {
  ADD_PRODUCT_STARTED,
  ADD_PRODUCT_ERROR,
  PRODUCT_ADDED,
} from './ProductFormAction';
import { initialState } from '../../../rootReducer';

const addProductReducer = (state = initialState, action) => {

  switch (action.type) {

    // --------------- ADD PRODUCT REDUCER --------------- //

    case ADD_PRODUCT_STARTED: {

      return {
        ...state,
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
        isLoaded: true,
        data: action.payload,
      };

    }

    default: {

      return state;

    }

  }

};

export default addProductReducer;
