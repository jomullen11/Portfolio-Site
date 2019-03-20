import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
        return (
                <nav fixed="top">
                    
                    <ul>
                        <div className="NavButton">
                            <Link activeclassname='active' exact='true' to='/' id="Link">Home</Link>
                            <Link activeclassname='active' to='/resume' id="Link">Resume</Link>
                            <Link activeclassname='active' to='/aboutme' id="Link">About Me</Link>
                            <Link activeclassname='active' to='/projects' id="Link">Projects</Link>
                            <Link activeclassname='active' to='/contact' id="Link">Contact</Link>
                        </div>
                    </ul>
                    
                </nav>
        )}

export default Navbar