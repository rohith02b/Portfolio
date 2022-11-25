import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav class=" container navbar navbar-expand-sm navbar-dark bg-dark py-md-3 shadow fixed-top rounded-bottom">
            <div class="container">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0">

                        <li class="nav-item mx-3">
                            <Link to="/" className='nav-link'>Home</Link> 
                        </li>
                        <li class="nav-item mx-3">
                            <Link to="/AboutMe" className='nav-link'>About Me</Link>
                        </li>
                        <li class="nav-item mx-3">
                            <Link to="/Projects" className='nav-link'>Projects</Link>
                        </li>
                        <li class="nav-item mx-3">
                            <a href="./#contactMe" className='nav-link'>Contact Me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;