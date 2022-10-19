import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./routes/DashBoard";
import Portfolio from "./routes/Portfolio";

import './App.css';
import React, { useState, useEffect } from 'react';


function App() {
  const [ loginStatus, setLoginStatus] = useState(false);

  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoard/>}></Route>
          <Route path="/portfolio/*" element={<Portfolio/>}></Route>
        </Routes>
      
      
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
