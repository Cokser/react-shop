import requestActionCreator from '../../helpers/getRequestActionCreator';

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

export const getProductsAction = requestActionCreator({
  loadingAction: productsIsLoading,
  errorAction: productsHasError,
  receivedAction: productsReceive,
});
