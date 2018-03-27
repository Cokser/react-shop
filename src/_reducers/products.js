import {
  GET_PRODUCTS_STARTED,
  GET_PRODUCTS_ERROR,
  RECEIVE_PRODUCTS,
  ADD_PRODUCT,
  GET_PRODUCT } from '../_actions';

const initialState = {
  isLoading: false,
  loaded: false,
  data: null,
  error: null,
};


export default function products(state = initialState, action) {


  switch (action.type) {

    case ADD_PRODUCT: {

      return [
        ...state,
        action.product,
      ];

    }

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

    case GET_PRODUCT: {

      console.log(action);

      return {
        ...state,
        isLoading: false,
        loaded: true,
        data: action.payload,
      };

    }

    default: {

      return state;

    }

  }

}
