import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
// pages
import Page from '../pages'
import ErrorPage from '../pages/ErrorPage';
import Main from '../pages/Main';
import Login from '../pages/Login';
import Detail from '../pages/Detail';
import SignUp from '../pages/SignUp';
import PrivateRoute from './PrivateRoute';
import Filter from '../pages/Filter';


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
      },{
        path: 'signup',
        element: <SignUp />
      }, {
        path: 'pokemon/:id',
        element: <Detail />
      }, {
        path: 'like',
        element: <PrivateRoute />
      }, {
        path: 'filter',
        element: <Filter />
      },
    ]
  }
]);

export default router;