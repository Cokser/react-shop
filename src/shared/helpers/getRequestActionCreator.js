import Request from 'superagent';

const requestActionCreator = ({ loadingAction, errorAction, receivedAction }) => {

  const requestWrapper = (url) => {

    const request = (dispatch) => {

      dispatch(loadingAction(true));
      dispatch(errorAction(false));

      Request.get(url)
        .then((response) => {

          console.log(response);
          dispatch(receivedAction(response.body.data));
          // dispatch(loadingAction(false));

        })
        .catch(() => {

          dispatch(errorAction(true));

        });

    };

    return request;

  };

  return requestWrapper;

};

export default requestActionCreator;
