import React from "react"
import Header from './Header'
import Footer from './Footer'
import projectsData from "./Data";
 
class Projects extends React.Component {
  constructor(){
    super()
    this.state = {
      projects :projectsData
    }
  }
  render() {
    const projectInfo = this.state.projects.map(project => project={project})
    console.log(projectInfo)
    return (
      <div>
        <Header />
        <div>{projectInfo.name}</div> 
        
       
        <Footer />
      </div>

  
    )
    }
  
}
 
export default Projects;