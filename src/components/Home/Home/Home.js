import React from 'react';
import Particles from 'react-particles-js';
import ContactFrom from '../contacfrom/ContactFrom';

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Section1 from '../Section1/Section1';
import WorkSec from '../worksec/WorkSec';
import Footer from './footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Particles 
        params={{
          particles: {number:{
            value:20,
            density:{
              enable:true,
              value_area:500
            }
          },
          shape:{
            type:"circle",
            stroke:{
              width:6,
              color:"#ffff"
            }
          }
        }
        }}      
      />
            <Section1></Section1>
            <Particles 
        params={{
          particles: {number:{
            value:20,
            density:{
              enable:true,
              value_area:500
            }
          },
          shape:{
            type:"circle",
            stroke:{
              width:6,
              color:"#ffff"
            }
          }
        }
        }}      
      />
            <WorkSec></WorkSec>
            <Particles 
        params={{
          particles: {number:{
            value:20,
            density:{
              enable:true,
              value_area:500
            }
          },
          shape:{
            type:"circle",
            stroke:{
              width:6,
              color:"#ffff"
            }
          }
        }
        }}      
      />
      <Particles 
        params={{
          particles: {number:{
            value:20,
            density:{
              enable:true,
              value_area:500
            }
          },
          shape:{
            type:"circle",
            stroke:{
              width:6,
              color:"#ffff"
            }
          }
        }
        }}      
      />
            <ContactFrom></ContactFrom>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;