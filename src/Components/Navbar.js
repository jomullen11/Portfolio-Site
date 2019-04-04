import React from 'react'
import { NavLink } from "react-router-dom"



const active={ color: '#E8E6E4', borderBottom: 'white outset 3px', borderRight: 'white outset 3px', borderTop: 'black outset 3px', borderLeft: 'black outset 3px' };



const Navbar = () => {
        return (
                <nav>
                    
                    <ul>
                        <div className="NavButton">
                            <NavLink activeStyle={active} exact to='/' className="Link">Home</NavLink>
                            <NavLink activeStyle={active} to='/resume' className="Link">Resume</NavLink>
                            {/* <NavLink activeStyle={active} to='/aboutme' className="Link" >About Me</NavLink> */}
                            <NavLink activeStyle={active} to='/projects' className="Link">Projects</NavLink>
                            <NavLink activeStyle={active} to='/contact' className="Link">Contact</NavLink>
                        </div>
                    </ul>
                    
                </nav>
        )}

export default Navbar