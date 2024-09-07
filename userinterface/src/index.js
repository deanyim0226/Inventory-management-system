import React from 'react';
import * as ReactDOM from "react-dom/client"
import { BrowserRouter } from 'react-router-dom';
import App from './application/App';

const root =  ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);