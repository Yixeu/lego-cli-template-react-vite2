import React from 'react';
import ReactDOM from 'react-dom';
import { LegoStore } from '@/store';
import App from './App';

ReactDOM.render(
  <LegoStore>
    <App />
  </LegoStore>,
  document.getElementById('root'),
);
