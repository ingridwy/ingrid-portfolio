import React from "react"
import Header from './Header'
import Footer from './Footer'
import { render } from "@testing-library/react"
 
class About extends React.Component{
  render() {
    return (
      <div>
        <Header />
      <div class="about-body">

       <div className="intro">
            Hi, I'm Ingrid.<br></br>
            I self-taught python via online course and later joined a 9-weeks-bootcamp at lewagon. <br></br>
            I am a curious person and love to see people using the application that I build. 
        </div>

        <div>
          <h2>Skills</h2>
          <ul className="about-list">
            <li>Ruby on Rails</li>
            <li>PostgreSQL</li>
            <li>HTML5</li>
            <li>SCSS</li>
            <li>JavaScript ES6</li>
            <li>React</li>
            <li>Vue</li>
            <li>JQuery</li>
            <li>react-router</li>
            <li>Bootstrap3</li>
            <li>REST APIs</li>
            <li>Git</li>
            <li>Heroku</li>
          </ul>
        </div>
        <div>
          <h2>Education</h2>
          <ul className="about-list">
            <li>Le Wagon (9 weeks fulltime onsite Bootcamp)</li>
            <li>King's College,London (Bsc Nursing Studies)</li>
          </ul>
        </div>
        <div>
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