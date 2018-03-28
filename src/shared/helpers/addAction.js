import Request from 'superagent';
// TODO: filename is inconsistant with requestActionCreator
// TODO: remove double multilines


const addAction = ({ loadingAction, errorAction, receivedAction }) => {

  // TODO: remove redudant variable
  const requestWrapper = (data, url) => {

    console.log(data, url);

    // TODO: write real code an comment it, mock with just promise
    const request = (dispatch) => {

      dispatch(loadingAction(true));
      dispatch(errorAction(false));

      Request.get(url)
        .then((response) => {

          const fakeDate = response.body.data.concat(data);

          console.log(fakeDate);

          dispatch(receivedAction(fakeDate));
          dispatch(loadingAction(false));
          // dispatch(receivedAction(response.body.data));
          // dispatch(loadingAction(false));

        });
      // .catch(() => {
      //
      //   dispatch(errorAction(true));
      //
      // });

    };

    return request;

  };

  return requestWrapper;

};

export default addAction;
