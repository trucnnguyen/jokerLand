import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import "../styles.css";

export default function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/API">API</Link>
        </li>
        <li>
          <Link to="/Tictactoe">Tictactoe</Link>
        </li>
      </ul>
    </nav>
  );
}
