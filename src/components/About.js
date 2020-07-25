import React from "react"
import Header from './Header'
import Footer from './Footer'
import { render } from "@testing-library/react"
 
class About extends React.Component{
  render() {
    return (
      <div>
        <Header />
      <div className="about-body">

       <div className="intro about-item">
        <p>
            Hi, I'm Ingrid, a self-taught developer who recently accomplished Le Wagon coding bootcamp.<br></br>
            See below for my tech skill and experience.
            <br></br>

            </p>
        </div>

        <div className="about-item">
          <h2>Skills</h2>
          <ul className="about-list">
            <li>Ruby on Rails</li>
            <li>JavaScript ES6</li>
            <li>PostgreSQL</li>
            <li>JQuery</li>
            <li>HTML5</li>
            <li>SCSS</li>
            <li>React</li>
            <li>react-router</li>
            <li>Vue</li>
            <li>Bootstrap3</li>
            <li>REST APIs</li>
            <li>Git</li>
            <li>Heroku</li>
          </ul>
        </div>
        <div className="about-item">
          <h2>Education</h2>
          <ul className="about-list">
            <li>Le Wagon (9 weeks fulltime onsite Bootcamp)</li>
            <li>King's College,London (Bsc Nursing Studies)</li>
          </ul>
        </div>
        <div className="about-item">
          <h2>Contact</h2>
          <ul className="about-list about-contact">
            <a href="https://www.linkedin.com/in/ingrid-cheng/" target="_blank">
              <li>LinkedIn</li>
            </a>
            <a href="https://github.com/ingridwy" target="_blank">
              <li>Github</li>
            </a>  
          </ul>
        </div>
      </div>
                
        <Footer />
      </div>
    )
  }
  
}
 
export default About;