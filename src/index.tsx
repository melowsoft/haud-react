import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Routes } from "react-router-dom";
import App from './components/App';
import { Provider } from 'react-redux';
import { store } from './state';
import './index.css';

import 'react-loading-skeleton/dist/skeleton.css'

ReactDOM.render(
  <React.StrictMode>
    <Routes>
      <Provider store={store}>
        <App />
      </Provider>
    </Routes>
  </React.StrictMode>,
  document.getElementById('root')
);
