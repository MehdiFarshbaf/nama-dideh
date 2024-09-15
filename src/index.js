import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './assets/styles/styles.css'
import './assets/styles/fonts.css'
import {BrowserRouter} from 'react-router-dom';
import {AuthContextProvider} from "./context/context";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <AuthContextProvider>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </AuthContextProvider>
    </BrowserRouter>
);

