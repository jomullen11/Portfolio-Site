import React, { Component } from 'react'

const send = <img src="https://img.icons8.com/ios-glyphs/16/000000/filled-sent.png" alt="Send Icon" />

class Contact extends Component{
  send = <img src="https://img.icons8.com/ios-glyphs/16/000000/filled-sent.png" alt="Send Icon" />

  render(){
    return(
      <div class="contactPage">
        <h2>Contact Me!</h2>
        <br/>
        <form action="mailto:jordan.mullen@hotmail.com" method="post" encType="text/plain">
          <fieldset>
            <legend>Send Me and Email:</legend>
            <label for="emailAddress">What's your email?</label>
            <br/>
              <input id="emailAddress" type="email" name="mail" required/>
            <br/>
            <label for="emailName">What's your name?</label>
            <br/>
              <input id="emailName" type="text" name="name"/>
            <br/>
            <label for="emailContent">Write your email here:</label>
            <br/>
              <textarea id="emailContent" type="text" name="comment" required />
            <br/>
            <input type="submit" value="Send" />
            <input type="reset" value="Reset"/>
          </fieldset>
        </form>
      </div>
    )
  }
}

// const Contact = () => (
      // <div class="contactPage">
      //   <h2>Contact Me!</h2>
      //   <br/>
      //   <form action="mailto:jordan.mullen@hotmail.com" method="post" enctype="text/plain">
      //     <fieldset>
      //       <legend>Send Me and Email:</legend>
      //       <label for="emailAddress">What's your email?</label>
      //       <br/>
      //         <input id="emailAddress" type="email" required/>
      //       <br/>
      //       <label for="emailName">What's your name?</label>
      //       <br/>
      //         <input id="emailName" type="text"/>
      //       <br/>
      //       <label for="emailContent">Write your email here:</label>
      //       <br/>
      //         <textarea id="emailContent" type="text" required />
      //       <br/>
      //       <input type="submit" value={send} />
      //     </fieldset>
      //   </form>
      // </div>
//     );

export default Contact;