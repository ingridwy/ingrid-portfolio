import React from "react"
import Header from './Header'
import Footer from './Footer'
import projects from "./Data";
 
function Projects() {
  const projectInfo = projects.map(project => project={project})

    return (
      <div>
        <Header />
        <div>{`${projectInfo.name}`}</div> 
        
       
        <Footer />
      </div>
    )
  
  
}
 
export default Projects;