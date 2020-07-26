import React from "react"
import Header from './Header'
import Footer from './Footer'
import projectsData from "./Data";
 
class Projects extends React.Component {
  constructor(){
    super()
    this.state = {
      projects :projectsData,
      index : 0
    }
  }
  render() {
    const projectInfo = this.state.projects.map(project => project={project})
    var eachProject = projectInfo[0].project
    
    return (
      <div>
        <Header />
        <div className="projects-container">
        <h4>{`${eachProject.name}`}</h4>
        <p>Website: 
          <a href={`${eachProject.url}`} target="_blank" rel="noopener noreferrer" className="project-link">
            {` ${eachProject.url}`}
          </a>
          </p>
        <p>Github: 
          <a href={`${eachProject.github}`} target="_blank" rel="noopener noreferrer" className="project-link">{` ${eachProject.github}`}</a>
          </p>
        <p>Tech: {`${eachProject.skills.join(" ○ ")}`}</p>
        <div className="image-container">
        {eachProject.img.map((img, idx) => (
          
            <img src={img} alt="" className="project-image" key={idx} />
    
          ))}
        </div>
        </div>
        


          
         
       
        <Footer />
      </div>

  
    )
    }
  
}
 
export default Projects;