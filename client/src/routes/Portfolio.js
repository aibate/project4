import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CreatePortfolio from './CreatePortfolio';

function Portfolio() {
  return (
    <div>
        <nav>
          <ul>
            <li>
              <Link to="add">Create Portfolio</Link>
            </li>
          </ul>
        </nav>
        <Routes>
            <Route path="add" element={<CreatePortfolio />}/>
        </Routes>
    </div>
  )
}

export default Portfolio