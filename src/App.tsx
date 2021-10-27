import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from './Login';

function App() {
  const loginUser = (name: string, email: string) => {
    console.log('Logging in', name, email);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Login loginUser={loginUser} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
