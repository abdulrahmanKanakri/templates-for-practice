import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './presentation/App.jsx';
import store from './presentation/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
