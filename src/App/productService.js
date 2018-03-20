// import {ADD_PRODUCT} from '../_actions';

// export function getProducts() {
//   fetch(dataUrl)
//     .then((res) => res.json())
//     .then(
//       (result) => {
//
//         // this.setState({
//         // 	isLoaded: true,
//         // 	data: result.data
//         // });
//       },
//       (error) => {
//         console.log(error);
//         this.setState({
//           isLoaded: true,
//           error
//         });
//       }
//     )
// }

export function getProducts(dataUrl) {


  console.log('hello reducer', dataUrl);
  return fetch(dataUrl)
    .then(handleResponse);

}

function handleResponse(response) {

  if (!response.ok) {
    return Promise.reject(response.statusText);
  }

  console.log(response.json());
  return response.json();

}