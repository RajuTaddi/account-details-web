import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import initConfig from './config/config';
import { HashRouter as Router } from 'react-router-dom';
import { Theme } from './common/theme/theme-provider';
import AuthProvider from './common/auth/auth-provider';
initConfig(process.env.BUILD_ENV);

ReactDOM.render(
  <AuthProvider>
    <Theme>
      <Router>
        <App />
      </Router>
    </Theme>
  </AuthProvider>,
  document.getElementById('root'),
);
