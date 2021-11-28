import React from 'react';
import logo from './logo.svg';
import './App.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import Router from './Nav'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span>React Fundamentals</span>
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*<p>*/}
        {/*  Edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
        {/*<a*/}
        {/*  className="App-link"*/}
        {/*  href="https://reactjs.org"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Learn React*/}
        {/*</a>*/}
      </header>

      <Router/>
    </div>
  );
}

export default App;
