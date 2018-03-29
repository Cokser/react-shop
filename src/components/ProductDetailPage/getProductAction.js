import requestActionCreator from '../../shared/helpers/getRequestActionCreator';

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

export const getProductAction = requestActionCreator({
  loadingAction: productIsLoading,
  errorAction: productHasError,
  receivedAction: productReceive,
});
