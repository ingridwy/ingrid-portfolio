import React from 'react';
import './App.css';
import About  from './components/About'
import  Projects from './components/Projects'
import  Home from './components/Home'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Router basename='/ingrid-portfolio'>
          <Switch>
            <Route exact path="/about" ><About /></Route>
            <Route exact path="/projects"><Projects /></Route>
            <Route exact path="/" ><Home /></Route>
          </Switch>
        </Router>
      </div>
     
    );
  }
  
}

export default App;
