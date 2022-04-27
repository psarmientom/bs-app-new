import './App.css';
import Nav from './components/Nav'
import HomePage from './components/HomePage'
import Copyright from './components/Copyright';
import About from "./components/About"
import Contact from "./components/Contact"
import Team from "./components/Team"
import { HashRouter, Routes, Route} from "react-router-dom"


function App() {
  return (
   <HashRouter>
    <Nav />
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    <Copyright />
  </HashRouter>
  )
}

export default App;
