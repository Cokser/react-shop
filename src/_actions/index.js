export const ADD_PRODUCT = 'ADD_PRODUCT';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST';
export const GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR';

export function addProduct(product) {

  return {
    type: ADD_PRODUCT,
    product,
  };

}

export function getProducts(data) {

  return {
    type: GET_PRODUCTS,
    data,
  };

}

// export function getAllProducts(url) {
//   return dispatch => {
//
//     dispatch(request());
//
//     getProducts(url)
//       .then(
//         data => dispatch(success(data)),
//         error => dispatch(failure(error))
//       );
//   };
//
//   function request() { return { type: GET_PRODUCTS_REQUEST } }
//   function success(data) { return { type: GET_PRODUCTS, data } }
//   function failure(error) { return { type: GET_PRODUCTS_ERROR, error } }
// }
