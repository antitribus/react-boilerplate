import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import './core/MainStyle.scss';

import Store from './core/Store';
import Routes from "./core/Routes";

ReactDOM.render(<Provider store={Store}>
    <Routes /></Provider>, document.getElementById('root'));
