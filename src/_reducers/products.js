
import { ADD_PRODUCT, GET_PRODUCTS, GET_PRODUCT, GET_PRODUCTS_ERROR } from '../_actions/index';

export default function products(state = [], action) {

  switch (action.type) {

    case ADD_PRODUCT: {

      return [
        ...state,
        action.product,
      ];

    }

    case GET_PRODUCTS: {

      return {
        ...state,
        data: action.data,
      }.data;

    }

    case GET_PRODUCT: {

      return {
        data: action.data,
      }.data;

    }

    case GET_PRODUCTS_ERROR: {

      return [
        ...state,
        action.data,
      ];

    }
    default: {

      return state;

    }

  }

}
