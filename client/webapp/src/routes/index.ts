import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { Router } from '@remix-run/router';
import LoginPage from '../pages/LoginPage';
const routes: RouteObject[] = [
  {
    index: true,
    path: '/',
    Component: LoginPage,
  },
];

const router: Router = createBrowserRouter(routes);

export default router;
