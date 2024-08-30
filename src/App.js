// App.js
import Navbar from "./view/nav/NavBar";
import React from 'react';
import Home from "./view/home/Home";
import Menu from "./view/menu/Menu";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App;
