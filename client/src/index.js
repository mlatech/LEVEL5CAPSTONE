import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserProvider from './UserProvider.js';

import  { BrowserRouter }  from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <UserProvider>
    <BrowserRouter>
            <App />
    </BrowserRouter>
        </UserProvider>
);
