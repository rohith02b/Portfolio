import React from 'react'

function Navbar() {
    return(
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark p-md-3">
            <div class="container">
            {/* <a class="navbar-brand" href="/About-me">ROHITH BADRINATH</a> */}
             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>                    
            </button>             
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li class="nav-item mx-3">
                    <a class="nav-link" aria-current="page" href='/Home'>Home</a>
                    </li>
                    <li class="nav-item mx-3">
                    <a class="nav-link" href="/About-me">About Me</a>
                    </li>
                    <li class="nav-item mx-3">
                    <a class="nav-link" href="/Projects">Projects</a>
                    </li>
                    <li class="nav-item mx-3">
                    <a class="nav-link" href="/Contact">Contact Me</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>      
    )
}


export default Navbar;