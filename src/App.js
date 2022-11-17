import { Suspense} from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Profile from "./components/Profile"
import Project from "./components/Project"
import Contact from "./components/Contact"
import FecthingData from "./components/FecthingData"
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import './components/css/main.css'





function App() {
  


  return (
    <div>
      <Router>
      <Navbar/>
      <Suspense fallback={<h1>Loading.....</h1>}>
        <Routes>
            <Route path="/" exact="true" element={<Home/>}/>
            <Route path="profile" element={<Profile bahlul="ente bahlul"/>}/>
            <Route path="project" element={<Project/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="tes" element={<FecthingData/>}/>
        </Routes>
      </Suspense>
      </Router>
    </div>
  );
}

export default App;
