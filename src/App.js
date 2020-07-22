import React from 'react';
import './App.css';
import About from './components/About'
import Projects from './components/Projects'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
