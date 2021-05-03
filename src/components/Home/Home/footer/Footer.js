import React from 'react';
import './footer.css';
import logo1 from '../../../../images/facebook.png';
import logo2 from '../../../../images/github-sign.png';
import logo3 from '../../../../images/linkedin.png';
const Footer = () => {
    return (
        <div className=" text-center text-white bg-dark footer col-md-12">
            <h5>Copyright © 2021 |Munna Dey </h5>
            <div className="icon container">
            <a href="https://www.facebook.com/munna.dey.90857"><img style={{width:'30px'}} src={logo1} alt="" srcset=""/></a>
            <a href="https://github.com/MunnaDey124"><img style={{width:'30px'}} src={logo2} alt="" srcset=""/></a>
            <a href="https://www.linkedin.com/in/munnadey/" target="_blank"><img style={{width:'30px'}} src={logo3} alt="" srcset=""/></a>
            
            </div>
        </div>
    );
};

export default Footer;