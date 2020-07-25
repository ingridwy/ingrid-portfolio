import React from "react"
import Header from './Header'
import Footer from './Footer'
 
class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="home-container">
          <img src="./image/photo.jpeg" alt="Ingrid's photo" class="home-photo"></img><br></br>
          <div className="home-text">
            <h5>Ingrid Cheng</h5><br></br>
            <p> A full stack developer based in London.<br></br>
              I self-taught python via online course and later joined a 9-weeks-bootcamp at Le Wagon.<br></br>
              I am a curious person and love to see people using the application that I build. <br></br>
              Click in About to find out more about my background and Projects to view my work! </p> 
          </div>
        </div>
        <Footer />
      </div>
    )
  }
  
}
 
export default Home; 