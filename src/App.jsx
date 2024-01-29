
import './App.css'
import { Routes, Route } from "react-router-dom";
import {Home, Projects, About} from "./views/index"

function App() {
  
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
    </>
  )
}

export default App
