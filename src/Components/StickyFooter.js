import React  from 'react'
import { NavLink } from 'react-router-dom'

const stickyFooter = () => {
    return(
    <nav className="footer">
        <ul className="footerText">
            <NavLink to='/contact'>Contact</NavLink>
            <a href="https://github.com/jomullen11">GitHub<i className="devicon-github-plain"></i></a>
            <a href="https://www.linkedin.com/in/jomullen11/">LinkedIn</a>
        </ul>
    </nav>
    )}

export default stickyFooter