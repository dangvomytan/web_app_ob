import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { Router } from '@remix-run/router';

import DefaultLayout from '../layouts/DefaultLayout';

import DashboardPage from '../pages/DashboardPage';
import LoginPage from '../pages/LoginPage';
import listStandard from '../components/views/item/listStandard/listStandard';
const routes: RouteObject[] = [
  {
    path: '/login',
    Component: LoginPage,
  },
  {
    id: 'root',
    path: '/',
    Component: DefaultLayout,
    children: [
      {
        index: true,
        Component: DashboardPage,
      },
    ],
  },
  {
    path: '/standard',
    Component: listStandard,
  },
];

const router: Router = createBrowserRouter(routes);

export default router;
