import React from "react"
import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import { withRouter } from "react-router";

 class Header extends React.Component {
   render(){
    return (
    <div id="header">
      <nav className="navbar navbar-expand-lg navbar-light " >
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li classNmae="nav-item">
            <Link to="/" className="nav-link">Home </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" >About</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link" >Projects</Link>
          </li>
        </ul>
      </div>
      </nav>   
    </div>
        )
   }
  
}
 
export default Header;