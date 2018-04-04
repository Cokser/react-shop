// import Request from 'superagent';

const addAction = ({ loadingAction, errorAction, receivedAction }) => {

  const requestWrapper = (data, url) => {

    console.log(data, url);

    const request = (dispatch) => {

      dispatch(loadingAction(true));
      dispatch(errorAction(false));

      // ------ SHOULD BE POST ------ //
      // Request.post('/user')
      //   .set('Content-Type', 'application/json')
      //   .send('{"name":"tj","pet":"tobi"}')
      //   .then((res) => {
      //
      //     dispatch(receivedAction(res));
      //     dispatch(loadingAction(false));
      //
      //   });


      // ------ FAKE POST ------ //
      const fakeRequest = new Promise((resolve, reject) => {

        setTimeout(() => {

          dispatch(receivedAction(reject));
          resolve(99);

        }, 1000);

      });

      return fakeRequest;

    };

    return request;

  };

  return requestWrapper;

};

export default addAction;
