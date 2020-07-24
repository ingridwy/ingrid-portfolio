import React from "react"
import Header from './Header'
import Footer from './Footer'
 
class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="home-container">
          <h5>Ingrid Cheng</h5><br></br>
       <p> A full stack developer based in London.<br></br>
        I am a curious person and love to see people using the application that I build. <br></br>
        Click in about to find out more about my background and projects to view my work! </p> 
        </div>
        <Footer />
      </div>
    )
  }
  
}
 
export default Home; 