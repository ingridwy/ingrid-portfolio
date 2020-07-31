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

    var eachProject = projectInfo[this.state.index].project
    const secondProject = projectInfo[1].project
    const thirdProject = projectInfo[2].project
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
          <p>GitHub: 
            <a href={`${eachProject.github}`} target="_blank" rel="noopener noreferrer" className="project-link">
              <img src="image/github.png" alt="" class="github-image"/></a>
          </p>
          <p>Tech: {`${eachProject.skills.join(" ○ ")}`}</p>
          <p>{`${eachProject.description}`}</p>
          <div className="image-container">
          {eachProject.img.map((img, idx) => (
              <img src={img} alt="" className="project-image" key={idx} />
            ))}
          </div>
        </div>

        <div className="projects-container">
          <h4>{`${secondProject.name}`}</h4>
          <p>Website: 
            <a href={`${secondProject.url}`} target="_blank" rel="noopener noreferrer" className="project-link">
              {` ${secondProject.url}`}
            </a>
          </p>
          <p>GitHub: 
            <a href={`${secondProject.github}`} target="_blank" rel="noopener noreferrer" className="project-link">
              <img src="image/github.png" alt="" class="github-image"/>
              </a>
          </p>
          <p>Tech: {`${secondProject.skills.join(" ○ ")}`}</p>
          <p>{`${secondProject.description}`}</p>
          <div className="image-container">
          {secondProject.img.map((img, idx) => (
              <img src={img} alt="" className="project-image" key={idx} />
            ))}
          </div>
        </div> 

          <div className="projects-container">
          <h4>{`${thirdProject.name}`}</h4>
          <p>Website: 
            <a href={`${thirdProject.url}`} target="_blank" rel="noopener noreferrer" className="project-link">
              {` ${thirdProject.url}`}
            </a>
          </p>
          <p>GitHub: 
            <a href={`${thirdProject.github}`} target="_blank" rel="noopener noreferrer" className="project-link">
            <img src="image/github.png" alt="" class="github-image"/>
            </a>
          </p>
          <p>Tech: {`${thirdProject.skills.join(" ○ ")}`}</p>
          <p>{`${thirdProject.description}`}</p>
          <div className="image-container">
          {thirdProject.img.map((img, idx) => (
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