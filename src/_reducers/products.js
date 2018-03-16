import {ADD_PRODUCT} from '../_actions/actions';

const initialState = [
  {
    "name": "firstProd",
    "description": "first product",
    "count": 2,
    "material": "plastic",
    "id": 1
  }
];

export default function products(state = initialState, action) {
    switch (action.type) {
      case ADD_PRODUCT: {
        return [
          ...state,
          action.payload
        ]
      }
      default: {
        return state;
      }
  }
}