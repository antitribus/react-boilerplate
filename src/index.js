import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import './core/MainStyle.scss';

import Store from './core/Store';
import Application from './modules/Application/Application';

ReactDOM.render(<Provider store={Store}><Application/></Provider>, document.getElementById('root'));
