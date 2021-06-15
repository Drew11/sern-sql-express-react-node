import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Provider} from 'react-redux';
import store from './store'
// import { getUsers } from './api/index'




ReactDOM.render(
  <Provider store={store}>
      <React.StrictMode>
          <App />
      </React.StrictMode>
  </Provider>
    ,
  document.getElementById('root')
);
