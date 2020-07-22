import React from "react"
import Header from './Header'
import Footer from './Footer'
 
function About(props) {
  return (
    <div>
      <Header />
     <div className="intro">
          Hi, I'm Ingrid. I self-taught python via online course and later joined a 9-weeks-bootcamp at lewagon. 
          I am a curious person and love to see people using the application that I build. 
        </div>
        <div> 
          <h4>Skills</h4>
            <ul className="skill-list">
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
              <h4>Education</h4>
              <ul>
                <li>King's College,London (Bsc Nursing Studies)</li>
                <li>Le Wagon(9 weeks fulltime onsite Bootcamp)</li>
              </ul>
              <h4>Contact</h4>
              <ul>
              <a href="https://www.linkedin.com/in/ingrid-cheng/" target="_blank">
                <li>LinkedIn</li>
                </a>
                <a href="https://github.com/ingridwy" target="_blank">
                  <li>Github</li>
                </a>  
              </ul>
              
            </div>
              
      <Footer />
    </div>
  )
}
 
export default About;