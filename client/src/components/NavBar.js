import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar(props) {
  const location = useLocation();
  const isHomePage = location.pathname === '/home';

  return (
    <div className="navbar">
      {isHomePage ? (
        <div>Home</div>
      ) : (
        <Link to="/home">Home</Link>
      )}
      <Link to="/plants">Plants</Link>
      <Link to="/info">Info</Link>
      <button onClick={props.logout}>Logout</button>
    </div>
  );
}