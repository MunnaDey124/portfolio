import React from 'react';
import './Header.css';
import Typed from 'react-typed';
const Header = () => {
    return (
        <div className="header_wrapper">
            <div className="main-info">
                <h3>Hello,I am</h3>
                <h1>Munna Dey</h1>
                <Typed className="typed-text"
                    strings={['React js','MongoDb','Node js']}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <div>
                <a href="#" className="btn btn-Success button" >Contact Me</a>
                   <a className="btn btn-Success button" href="https://drive.google.com/uc?export=download&id=1aguTeUdqVTLMWVHYtale5djO045z28jd">Get Resume</a>
                </div>
                <p className="aboutMe">As a computer science graduate with a passion for developing scalable web applications and working across the full stack. <br/> I am always ready to take any challenge for my career. I want to explore myself in the field of software development.</p>
            </div>
        </div>
    );
};

export default Header;