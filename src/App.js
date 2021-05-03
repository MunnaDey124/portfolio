
import Home from "./components/Home/Home/Home";
import Particles from 'react-particles-js';

function App() {
  return (
    <div >
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
     <Home></Home>
     
    </div>
  );
}

export default App;
