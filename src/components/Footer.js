import React from "react"
 
class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        © {new Date().getFullYear()}{" "}
          Ingrid Cheng
      </div>
    )
  }
  
}
 
export default Footer;