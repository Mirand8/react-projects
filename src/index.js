import React from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Counter from './Counter';
import Movies from './Movies'
import ReactDOM from 'react-dom/client';
import GithubUsers from './GithubUsers';
import PersonForm from './PersonForm'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <div id='app' className='container'>
      <Counter />
    </div>
    <div id='app' className='container'>
      <Movies/>
    </div>
    <div id='app' className='container'>
      <GithubUsers/>
    </div>
    <div id='app' className='container'>
      <PersonForm/>
    </div>
  </React.StrictMode>
);
