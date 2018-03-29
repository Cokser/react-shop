import addAction from '../../shared/helpers/addRequestActionCreator';

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
export const productAdded = payload => ({
  type: PRODUCT_ADDED,
  payload,
});

export const addProductAction = addAction({
  loadingAction: addIsLoading,
  errorAction: addHasError,
  receivedAction: productAdded,
});
