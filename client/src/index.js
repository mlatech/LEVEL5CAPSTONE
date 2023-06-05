import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import PlantProvider from './PlantContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<PlantProvider>
<App />
</PlantProvider>
);
