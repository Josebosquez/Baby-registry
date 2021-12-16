import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import { Provider as ReduxProvider } from "react-redux"
import {store} from "../src/redux/store"

ReactDOM.render(
  <ReduxProvider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ReduxProvider>,
  document.getElementById('root')
);
