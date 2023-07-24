import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { UserAccountProvider } from './context/UserAccountContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <UserAccountProvider>
            <App />
        </UserAccountProvider>
    </React.StrictMode>
);
