import React from "react"
import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';

 class Header extends React.Component {
   render(){
    return (
    <div id="header">
      <nav className="navbar navbar-expand-lg navbar-light " >
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="nav-link flex-fill heade-item" >
            <Link to="/" className= "header-link">Home</Link>
            </div>
            <div className="nav-link flex-fill" >
              <Link to="/about" className= "header-link">About</Link>
            </div>
            <div className="nav-link flex-fill">
              <Link to="/projects" className= "header-link">Projects</Link>
            </div>  
        </div>
      </nav>   
    </div>
        )
   }
  
}
 
export default Header;