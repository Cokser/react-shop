// import React from 'react';
//
// import App from './components/App';
//
// const loadRoute = (cb) => module => cb(null, module.default);
//
// const error = () => {
//   throw new Error('Cannot load Component');
// };
//
// export default {
//   path: '/',
//   component: App,
//   childRoutes: [
//     {
//       path: '/products',
//       getComponent(location, cb) {
//
//         System.import('./components/ProductsPage')
//           .then(loadRoute(cb))
//           .catch(error);
//
//       },
//     },
//   ],
// };
