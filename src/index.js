import React from 'react';
import CounterApp from './CounterApp';
import MoviesApp from './MoviesApp'
import ReactDOM from 'react-dom/client';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CounterApp />
    <MoviesApp/>
  </React.StrictMode>
);
