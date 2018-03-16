import { combineReducers } from 'redux';
import products from './products';


// const initialState = {
//   products: []
// };
//
// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     default: {
//       return state;
//     }
//   }
// };


export default combineReducers({
  products
});