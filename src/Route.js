import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Components/Home'
import Resume from './Components/Resume'
import Aboutme from './Components/Aboutme'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route path='/resume' component={ Resume } />
                <Route path='/aboutme' component={ Aboutme } />
                <Route path='/projects' component={ Projects } />
                <Route path='/contact' component={ Contact } />
                <Route exact path='/' component={ Home } />
            </Switch>
        );
    }
}

export default Routes;