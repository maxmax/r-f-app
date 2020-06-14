import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [beers, setBeers] = useState(null);

  useEffect(() => {
    fetch('/api/v1.0/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  useEffect(() => {
    fetch('/api/v1.0/tasks').then(res => res.json()).then(data => {
      setBeers(data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>The current time is {currentTime}.</p>
        {beers &&
          <div>
            <hr />
            {beers.map((item) =>
              <div key={item.id}>
                <div>{item.name}</div>
                <div>{item.description}</div>
                <hr />
              </div>
            )}
            <br />
            <br />
          </div>
        }
      </header>
    </div>
  );
}

export default App;
