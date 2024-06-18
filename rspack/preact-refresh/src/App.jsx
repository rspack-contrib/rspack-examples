import React from 'react';
import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(1);
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((x) => x + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <div>count: {count}</div>
        <a
          className="App-link"
          href="https://preactjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Preact
        </a>
      </header>
    </div>
  );
}

export default App;
