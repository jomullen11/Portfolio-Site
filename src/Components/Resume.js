import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
 
class Resume extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }
 
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }
 
  render() {
    const { pageNumber, numPages } = this.state;
 
    return (
      <div>
        <Document
          file="Resume.pdf"
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </div>
    );
  }
}

// const Resume = () => {
// return(
//     <div>
//         <h2>Resume Page</h2>
//         <object type="application/pdf" data="https://www.dropbox.com/s/m1es3mtp7pqtwhu/Resume%203%20PDF.pdf?dl=0" width="90%" height="90%"><a href="https://www.dropbox.com/s/m1es3mtp7pqtwhu/Resume%203%20PDF.pdf?dl=0">Link to Resume</a></object>
        
//     </div>
// )}





export default Resume