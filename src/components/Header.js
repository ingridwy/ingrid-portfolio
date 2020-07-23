import React from "react"
import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';

 class Header extends React.Component {
   render(){
    return (
    <div className="header">
      <nav class="navbar navbar-expand-lg navbar-light bg-light" >
        <h3>Ingrid Cheng</h3>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <a class="nav-link flex-fill" >
            <Link to="/home">Home</Link>
            <span class="sr-only">(current)</span></a>
            <a class="nav-link flex-fill" >
              <Link to="/about">About</Link>
            </a>
            <a class="nav-link flex-fill">
              <Link to="/projects">Projects</Link>
            </a>  
        </div>
      </nav>   
    </div>
        )
   }
  
}
 
export default Header;