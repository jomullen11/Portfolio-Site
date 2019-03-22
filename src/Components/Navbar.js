import React from 'react'
import { NavLink } from "react-router-dom"



const active={ color: '#E8E6E4', borderBottom: 'white outset 3px', borderRight: 'white outset 3px', borderTop: 'black outset 3px', borderLeft: 'black outset 3px' };



const Navbar = () => {
        return (
                <nav fixed="top">
                    
                    <ul>
                        <div className="NavButton">
                            <NavLink activeStyle={active} exact to='/' id="Link">Home</NavLink>
                            <NavLink activeStyle={active} to='/resume' id="Link">Resume</NavLink>
                            <NavLink activeStyle={active} to='/aboutme' id="Link">About Me</NavLink>
                            <NavLink activeStyle={active} to='/projects' id="Link">Projects</NavLink>
                            <NavLink activeStyle={active} to='/contact' id="Link">Contact</NavLink>
                        </div>
                    </ul>
                    
                </nav>
        )}

export default Navbar