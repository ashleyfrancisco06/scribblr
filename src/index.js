import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
// import App from './components/App/App'
import RenderLogin from './components/RenderLogin-SignUp/RenderLogin-SignUp';

ReactDOM.render((
    <BrowserRouter>
        <RenderLogin />
    </BrowserRouter>)
    , document.getElementById('root'));
