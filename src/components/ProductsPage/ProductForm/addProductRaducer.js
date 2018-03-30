import {
  ADD_PRODUCT_STARTED,
  ADD_PRODUCT_ERROR,
  PRODUCT_ADDED,
} from './addProductAction';
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

      console.log('adding hello', action);
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
