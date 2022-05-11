
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home.jsx";
import Community from "./Pages/Community/Community.jsx";
import Location from "./Pages/Location/Location.jsx";
import Menu from "./Pages/Menu/Menu.jsx";
import Sidenav from  "./Components/Sidenav/Sidenav.jsx";

function App() {
  return (
    <div className="App">
     <Navbar />
     <Sidenav />
     <Home />
     <Community />
     <Location />
     <Menu />
     
     
    </div>
  );
}

export default App;
