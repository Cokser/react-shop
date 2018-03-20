import {ADD_PRODUCT, GET_PRODUCTS, GET_PRODUCTS_REQUEST, GET_PRODUCTS_ERROR} from '../_actions/index';

const initialState = [
  {
    "data": [],
    "isLoaded": "false"
  }
];

export default function products (state = initialState, action) {

  switch (action.type) {
    case ADD_PRODUCT: {

      return [
        ...state,
        action.payload
      ]
    }

    case GET_PRODUCTS: {
      console.log(state, action);
      return {
        ...state,
        data: action.data,
        isLoaded: action.isLoaded
      }
    }

    case GET_PRODUCTS_REQUEST: {

      return [
        ...state,
        {
          data: action.data,
          isLoaded: action.isLoaded
        }
      ]
    }
    case GET_PRODUCTS_ERROR: {

      return [
        ...state,
        action.data
      ]
    }
    default: {
      return state;
    }
  }
}