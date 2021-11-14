import React from 'react';
import Search from './features/search/Search';
import './App.css';

function App() {
  return (
    <>
      <header>
        <nav className="navbar bg-light">
          <div className="container-fluid ms-5 py-2">
            <h2 className="mb-0">🎞️ OMDb Search</h2>
          </div>
        </nav>
      </header>
      
      <div className="App">
        <Search />
      </div>
    </>
  );
}

export default App;
