import requestActionCreator from '../helpers/requestActionCreator';
import addAction from '../helpers/addAction';

// TODO: split by separate files
// --------------- ADD PRODUCT ACTION --------------- //

export const ADD_PRODUCT_STARTED = 'ADD_PRODUCT_STARTED';
export const addIsLoading = bool => ({
  type: ADD_PRODUCT_STARTED,
  isLoading: bool,
});

export const ADD_PRODUCT_ERROR = 'ADD_PRODUCT_ERROR';
export const addHasError = bool => ({
  type: ADD_PRODUCT_ERROR,
  hasError: bool,
});

export const PRODUCT_ADDED = 'PRODUCT_ADDED';
export const addAdded = payload => ({
  type: PRODUCT_ADDED,
  payload,
});

export const addProduct = addAction({
  loadingAction: addIsLoading,
  errorAction: addHasError,
  receivedAction: addAdded,
});

// --------------- GET PRODUCTS ACTION --------------- //

export const GET_PRODUCTS_STARTED = 'GET_PRODUCTS_STARTED';
export const productsIsLoading = bool => ({
  type: GET_PRODUCTS_STARTED,
  isLoading: bool,
});

export const GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR';
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
  loadingAction: productsIsLoading,
  errorAction: productsHasError,
  receivedAction: productsReceive,
});

// --------------- GET PRODUCT ACTION --------------- //

export const GET_PRODUCT_STARTED = 'GET_PRODUCT_STARTED';
export const productIsLoading = bool => ({
  type: GET_PRODUCT_STARTED,
  isLoading: bool,
});

export const GET_PRODUCT_ERROR = 'GET_PRODUCT_ERROR';
export const productHasError = bool => ({
  type: GET_PRODUCT_ERROR,
  hasError: bool,
});

export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const productReceive = payload => ({
  type: RECEIVE_PRODUCT,
  payload,
});

export const getProduct = requestActionCreator({
  loadingAction: productIsLoading,
  errorAction: productHasError,
  receivedAction: productReceive,
});
