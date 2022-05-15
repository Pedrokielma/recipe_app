
import './App.css';
import { useRef, useEffect, useState } from 'react';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home.jsx";
import Community from "./Pages/Community/Community.jsx";
import Location from "./Pages/Location/Location.jsx";
import Menu from "./Pages/Menu/Menu.jsx";
import Sidenav from  "./Components/Sidenav/Sidenav.jsx";
import Collaborates from './Pages/Collaborates/Collaborates.jsx'
import Footer from './Pages/Footer/Footer';

function App() {
  // const { ref: myRef, inView: myElementIsVisible } = useInView();
  const [target, setTarget] = useState();
  const [numberPage, setNumberPage] = useState()
  




const changeNav = ((page)=>{
 setNumberPage(page)
})
  
  
 
   

  return (
    <div className="App">
     <Navbar  />
     <Sidenav number={numberPage} />
     <Home changeNav={changeNav}/>
     {/* <h2>{myElementIsVisible ? "yes" : "no"}</h2> */}
     <Community changeNav={changeNav}/>
     <Location changeNav={changeNav}/>
     <Menu changeNav={changeNav}/>
     <Collaborates changeNav={changeNav}/>
     <Footer />
     
     
    </div>
  );
}

export default App;
