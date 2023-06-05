import React from "react"
import axios from "axios"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Plant from "./components/Plant.js"
import Home from "./components/Home.js"
import Info from "./components/Info.js"

export default function App(){
  return(
    <Router>
      <div>
        {/* <Link to ="/plant" style={{padding: 50}}>Plants</Link>
        <Link to ="/info" style={{padding: 50}}>Information</Link> */}
       
      </div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/plant" element={<Plant />}/>
        <Route path="/info" element={<Info />}/>
      </Routes>
    </Router>
  )
}
