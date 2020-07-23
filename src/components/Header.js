import React from "react"
import {Link} from "react-router-dom"

 class Header extends React.Component {
   render(){
    return (
      <div class="header">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </div>
    )
   }
  
}
 
export default Header;