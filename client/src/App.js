import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./routes/DashBoard";
import Portfolio from "./routes/Portfolio";


import './App.css';
import React, { useState, useEffect } from 'react';


function App() {
  const [ loginStatus, setLoginStatus] = useState(false);
  const [ backendData, setBackendData] = useState([{}]);
  useEffect(() => {
    fetch('/api/test').then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data);
      }
    )
  }, [])
  
  return (
    <div className="App">
      <p></p>
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
