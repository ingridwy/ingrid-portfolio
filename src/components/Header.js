import React from "react"
import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';

 class Header extends React.Component {
   render(){
    return (
    <div id="header">
      <nav class="navbar navbar-expand-lg navbar-light " >
        <div class="collapse navbar-collapse" id="navbarNav">
          <a class="nav-link flex-fill heade-item" >
            <Link to="/" className= "header-link">Home</Link>
            </a>
            <a class="nav-link flex-fill" >
              <Link to="/about" className= "header-link">About</Link>
            </a>
            <a class="nav-link flex-fill">
              <Link to="/projects" className= "header-link">Projects</Link>
            </a>  
        </div>
      </nav>   
    </div>
        )
   }
  
}
 
export default Header;