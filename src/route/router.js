import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
// pages
import Page from '../pages'
import ErrorPage from '../pages/ErrorPage';
import Main from '../pages/Main';
import Login from '../pages/Login';
import Detail from '../pages/Detail';
import Wish from '../pages/Wish';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Page />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Main />
      }, {
        path: 'login',
        element: <Login />
      }, {
        path: 'pokemon/:id',
        element: <Detail />
      }, {
        path: 'wish',
        element: <Wish />
      }
    ]
  }
]);

export default router;