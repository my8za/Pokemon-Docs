import React from 'react';
import ReactDOM from 'react-dom/client';
// library
import { RouterProvider } from 'react-router-dom';
// router
import router from './route/router';
// store
import Store from './redux/Store';
// context
import PokeProvider from './context/PokeContext';
// style
import './style/sass/reset.scss';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <PokeProvider>
        <Provider store={Store}>
            <RouterProvider router={router} />
        </Provider>
    </PokeProvider>
);

