import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter as Router, browserHistory} from 'react-router-dom'
import routes from './config/routes'

import './index.css';

ReactDOM.render(<Router routes={routes} history={browserHistory}/>, document.getElementById('root'));
registerServiceWorker();
