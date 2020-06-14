import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router} from 'react-router-dom';
import Navigation from './components/navigation'
import 'bootstrap/dist/css/bootstrap.min.css';

import Routes from './routes'

ReactDOM.render(
  <>
    <Router>
      <Navigation />
      <Routes />
    </Router>
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
