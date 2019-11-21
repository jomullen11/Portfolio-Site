import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import Routes from './Route'
import Footer from './Components/StickyFooter'

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Fragment>
//           <Navbar />
//           <Routes />
//           <Footer />
//         </Fragment>
//       </div>
//     );
//   }
// }

const App = () => {
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const admin = ["jordantmullen11@gmail.com"];

  function readCookie(name) {
    var key = name + "=";
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      while (cookie.charAt(0) === " ") {
        cookie = cookie.substring(1, cookie.length);
      }
      if (cookie.indexOf(key) === 0) {
        return cookie.substring(key.length, cookie.length);
      }
    }
    return null;
  }

  const setEmailState = () => {
    setEmail(readCookie("Email"));
  };

  // used to clear state once user signs out
  const clearUserState = () => {
    setEmail(null);
  };

  // Sets admin state
  const setAdminState = () => {
    if (admin.includes(email) === true) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  };

  useEffect(() => {
    setAdminState();
    setEmailState();
  });
  
  return(
    <div className="App">
        <Routes />
        <Footer />
    </div>
  )
}

export default App;