import HomePage from './components/HomePage/HomePage';
import ProductsPage from './components/ProductsPage/ProductsPage';
import ProductDetailPage from './components/ProductDetailPage/ProductDetailPage';
import renderRoute from './renderRoute';

const routes = [
  {
    component: renderRoute,
    routes: [
      {
        path: '/',
        exact: true,
        component: HomePage
      },
      {
        path: '/home',
        exact: true,
        component: HomePage
      },
      {
        path: '/products',
        exact: true,
        component: ProductsPage
      },
      {
        path: '/products/:id',
        component: ProductDetailPage
      },
      {
        component: HomePage
      },
    ]
  }
];

export default routes;
