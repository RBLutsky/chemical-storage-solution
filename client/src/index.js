import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './Components/App';




ReactDOM.render((
    <BrowserRouter> 
        <App />
    </BrowserRouter>
), document.getElementById('root'));


