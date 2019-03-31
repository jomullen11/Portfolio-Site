import React, { Component } from 'react'

class Contact extends Component{
  
  render(){
    return(
      <div className="contactPage">
        <h1>Contact Me!</h1>
        <hr class="headerRow"/>
        <form class="contactFieldset">
            <legend>Would you like to...</legend>
            <span>
              <form action="mailto:jordan.mullen@hotmail.com?Subject=Employment%20Inquiry" target="_top" rel="noopener noreferrer" id="contactButtons" >
              <div class="container">
                <button type="submit" id="emailButton">Email Me?</button>
                <button type="button" id="callButton" data-toggle="modal" data-target="#myModal">Call Me?</button>
                {/* <!-- Modal --> */}
                <div class="modal fade" id="myModal" role="dialog">
                  <div class="modal-dialog">
                  
                    {/* <!-- Modal content--> */}
                    <div class="modal-content">
                      <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Give me a Call!</h4>
                      </div>
                      <div class="modal-body">
                        <a href="tel:8016154335">(801) 615-4335</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </form>
            </span>
        </form>
      </div>
      
      
    )
  }
}

export default Contact;