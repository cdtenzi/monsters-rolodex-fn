import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//if you want to start measuring performance in your app, pass a function 
//to log results (for example reportWebVitals(console.log))
//or send to an analytics enspoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
