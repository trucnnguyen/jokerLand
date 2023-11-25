import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Tictactoe from './pages/Tictactoe'
import API from './pages/API'

export default function Bar() {
    return (
    <div>
      {/* Route Components must be encapsulated by both BrowserRouter and Routes. */}
      <BrowserRouter>
        <Routes>
          {/* Route index is root route */}
          <Route index element={<Home />}/>
          <Route path="/Home" element={<Home />}/>
          <Route path="/Tictactoe" element={<Tictactoe />}/>
          <Route path="/API" element={<API />}/>
        </Routes>
      </BrowserRouter>
    </div>
    )
}
