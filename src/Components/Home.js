import React from 'react'



const Home = () => {
        return (
    <div>
      <img src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/55795251_10156206218656989_6479564890276102144_n.jpg?_nc_cat=104&_nc_eui2=AeECWXiu-QIpWFSm8vIgUJ3qUq2m8Ax21KPTuHEuTgO845y83CJYseyp2uMMJ5SlTMP4MwlsmeOI37rWF5-rzFYDDlz0YwaqUQf_WwxPp7sIsg&_nc_oc=AQkL9pvuVHw3T36H0ZUflHjD40Jv78j9veMNMKDhqa4kL977otDw3IfAoIiLkbdkY14QtMF5pkxi0SVMWdw4f6zI&_nc_ht=scontent-sjc3-1.xx&oh=3c24e343f1dc78a84f323e029d1e9b9c&oe=5DAA656F" alt="Jordan Mullen" id="profilePicture"/>
      <h1>Jordan Mullen</h1>
    {/* <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> */}
      <h2>Skills:</h2>
      <ul className="Icons">
        <div className="iconTooltip">
          <i className="devicon-html5-plain-wordmark colored skillsIcon"></i>
          <span className="tooltiptextHome">HTML 5</span>
        </div>
        <div className="iconTooltip">
          <i className="devicon-css3-plain-wordmark colored skillsIcon"></i>
          <span className="tooltiptextHome">CSS 3</span>
        </div>
        <div className="iconTooltip">
          <i className="devicon-javascript-plain colored skillsIcon"></i>
          <span className="tooltiptextHome">JavaScript</span>
        </div>
        <div className="iconTooltip">
          <i className="devicon-bootstrap-plain colored skillsIcon"></i>
          <span className="tooltiptextHome">Bootstrap</span>
        </div>
        <div className="iconTooltip">
          <i className="devicon-nodejs-plain colored skillsIcon"></i>
          <span className="tooltiptextHome">Node.js</span>
        </div>
        {/* <div className="iconTooltip">
          <i className="devicon-jquery-plain-wordmark colored skillsIcon"></i>
          <span className="tooltiptextHome">JQuery</span>
        </div> */}
        <div className="iconTooltip">
          <img src="data:image/jpeg;base64,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" alt="NPM" className="skillsPicture"></img>
          <span className="tooltiptextHome">NPM</span>
        </div>
        <div className="iconTooltip">
          <i className="devicon-express-original skillsIcon"></i>
          <span className="tooltiptextHome">Express</span>
        </div>
        <div className="iconTooltip">
          <i className="devicon-mongodb-plain colored skillsIcon"></i>
          <span className="tooltiptextHome">MongoDB</span>
        </div>
        {/* <div className="iconTooltip">
          <i className="devicon-mysql-plain colored skillsIcon"></i>
          <span className="tooltiptextHome">MySQL</span>
        </div>
        <div className="iconTooltip">
          <i className="devicon-postgresql-plain colored skillsIcon"></i>
          <span className="tooltiptextHome">PostgreSQL</span>
        </div> */}
        <div className="iconTooltip">
          <i className="devicon-github-plain colored skillsIcon"></i>
          <span className="tooltiptextHome">GitHub</span>
        </div>
        <div className="iconTooltip">
          <i className="devicon-gitlab-plain colored skillsIcon"></i>
          <span className="tooltiptextHome">GitLab</span>
        </div>
        <div className="iconTooltip">
          <i className="devicon-visualstudio-plain colored skillsIcon"></i>
          <span className="tooltiptextHome">Visual Studio Code</span>
        </div>
        {/* <div className="iconTooltip">
          <i className="devicon-wordpress-plain skillsIcon"></i>
          <span className="tooltiptextHome">WordPress</span>
        </div> */}
        <div className="iconTooltip">
          <i className="devicon-react-original colored skillsIcon"></i>
          <span className="tooltiptextHome">React.js</span>
        </div>
        {/* <div className="iconTooltip">
          <i className="devicon-angularjs-plain colored skillsIcon "></i>
          <span className="tooltiptextHome">AngularJS</span>
        </div> */}
        <div className="iconTooltip">
          <i className="devicon-vuejs-plain colored skillsIcon"></i>
          <span className="tooltiptextHome">Vue.js</span>
        </div>
        <div className="iconTooltip">
          <i className="devicon-heroku-original colored skillsIcon"></i>
          <span className="tooltiptextHome">Heroku</span>
        </div>
        <div className="iconTooltip">
          <i className="devicon-trello-plain colored skillsIcon"></i>
          <span className="tooltiptextHome">Trello</span>
        </div>
        <div className="iconTooltip">
          <i className="devicon-photoshop-line colored skillsIcon"></i>
          <span className="tooltiptextHome">Photoshop</span>
        </div>
      </ul>
      </div>
    )}


export default Home