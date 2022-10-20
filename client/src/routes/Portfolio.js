import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CreatePortfolio from './CreatePortfolio';
import ViewPortfolio from './ViewPortfolio';

function Portfolio() {
  return (
    <div>
        <nav>
          <ul>
            <li>
            <Link to="add">Create Portfolio</Link>
            <Link to="view">View Portfolio</Link>
            </li>
          </ul>
        </nav>
        <Routes>
            <Route path="add" element={<CreatePortfolio />}/>
            <Route path="view" element={<ViewPortfolio />}/>
        </Routes>
    </div>
  )
}

export default Portfolio