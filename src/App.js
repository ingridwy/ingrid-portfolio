import React from 'react';
import './App.css';
import About from './components/About'
import Projects from './components/Projects'
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  
  render(){
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/about"><About /></Route>
            <Route exact path="/projects"><Projects /></Route>
            
          </Switch>
        </Router>
      </div>
     
    );
  }
  
}

export default App;
