import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Plant from "./components/Plant.js";
import Home from "./components/Home.js";
import Info from "./components/Info.js";
import Auth from "./components/Auth.js";
import Navbar from "./components/NavBar.js";
import ProtectedRoute from './components/ProtectedRoute.js';
import { UserContext } from "./UserProvider.js";

export default function App() {
  return (
    <div className="app">
      <Routes>
     
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/plants"
          element={<Plant />}
        />
        <Route
          path="/info"
          element={<Info />}
        />
        
      </Routes>
    </div>
  );
}

