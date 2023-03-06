import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

import Home from './pages/home/Home.js';
import Menu from './pages/menu/Menu.js';

import './Routes.css';

const App = () => {
  const location = useLocation();

  return (
    <div className="Routes">
      <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
    </div>
  );
}

export default App;
