import React from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faBars } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <div class="container">
                <a class="navbar-brand text-white" href="#">Munna Dey</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon style={{color:'white'}} icon={faBars} />
                </button>
                <div class="collapse navbar-collapse " id="navbarNav">
                    <ul class="navbar-nav ms-auto text-white">
                        <li class="nav-item ">
                            <a class="nav-link text-white" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">About Me</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">portfolio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="https://drive.google.com/uc?export=download&id=1aguTeUdqVTLMWVHYtale5djO045z28jd">Contact</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;