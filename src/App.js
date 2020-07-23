import React from 'react';
import './App.css';
import About from './components/About'
import Projects from './components/Projects'
import Home from './components/Home'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Home />
        <About />
        <Projects />
      </div>
    );
  }
  
}

export default App;
