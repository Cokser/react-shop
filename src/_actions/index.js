import requestActionCreator from '../shared/helpers/requestActionCreator';


export const ADD_PRODUCT = 'ADD_PRODUCT';
export function addProduct(product) {

  return {
    type: ADD_PRODUCT,
    product,
  };

}

export const GET_PRODUCTS_STARTED = 'GET_PRODUCTS_STARTED';
export const productIsLoading = bool => ({
  type: GET_PRODUCTS_STARTED,
  isLoading: bool,
});

export const GET_PRODUCTS_ERROR = 'REQUEST_ERROR';
export const productsHasError = bool => ({
  type: GET_PRODUCTS_ERROR,
  hasError: bool,
});

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const productsReceive = payload => ({
  type: RECEIVE_PRODUCTS,
  payload,
});

export const getProducts = requestActionCreator({
  loadingAction: productIsLoading,
  errorAction: productsHasError,
  receivedAction: productsReceive,
});

export const GET_PRODUCT = 'GET_PRODUCT';
export function getProduct(data) {

  return {
    type: GET_PRODUCT,
    data,
  };

}
