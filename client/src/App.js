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
  const { token, logout  } = useContext(UserContext);

  return (
    <div className="app">
      {token && <Home logout={logout}/>}
      <Routes>
     
        <Route
          path="/"
          element={
            token ? <Navigate to="/plants" /> : <Auth />
          }
        />
        <Route
          path="/plants"
          element={<ProtectedRoute token={token}>
            <Plant />
            </ProtectedRoute>
            }
        />
        <Route
          path="/info"
          element={<ProtectedRoute token={token}>
          <Info />
          </ProtectedRoute>}
        />
        <Route
          path="/home"
          element={<ProtectedRoute token={token}>
          <Home />
          </ProtectedRoute>}
        />
      </Routes>
    </div>
  );
}

