import React, { Component } from 'react'

class Contact extends Component{
  render(){
    return(
      <div className="contactPage">
        <h1>Contact Me!</h1>
        <hr className="headerRow"/>
        <div className="contactFieldset">
            <legend>Would you like to...</legend>
            <span>
              <form action="mailto:jordan.mullen@hotmail.com?Subject=Employment%20Inquiry" target="_top" rel="noopener noreferrer" id="contactButtons" >
              <div className="container">
                <button type="submit" id="emailButton">Email Me?</button>
                <button type="button" id="callButton" data-toggle="modal" data-target="#myModal">Call Me?</button>
                {/* <!-- Modal --> */}
                <div className="contactModal contactFade" id="myModal" role="dialog">
                  <div className="modalDialog">
                  
                    {/* <!-- Modal content--> */}
                    <div className="modalContent">
                      <div className="modalHeader">
                        <button type="button" className="contactClose" data-dismiss="modal">&times;</button>
                        <h4 className="modalTitle">Give me a Call!</h4>
                      </div>
                      <div className="modalBody">
                        <a href="tel:8016154335">(801) 615-4335</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </form>
            </span>
        </div>
      </div>
    )
  }
}

export default Contact;