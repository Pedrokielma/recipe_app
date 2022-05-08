
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home.jsx";
import Community from "./Components/Community/Community.jsx";
import Location from "./Components/Location/Location.jsx";
import Menu from "./Components/Menu/Menu.jsx";

function App() {
  return (
    <div className="App">
     <Navbar />
     <Home />
     <Community />
     <Location />
     <Menu />
     
     
    </div>
  );
}

export default App;
