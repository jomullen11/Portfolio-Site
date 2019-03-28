import React, { Component, Fragment } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Routes from './Route'
import Footer from './Components/StickyFooter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Fragment>
          <Navbar />
          <Routes />
          <Footer />
        </Fragment>
      </div>
    );
  }
}

export default App;