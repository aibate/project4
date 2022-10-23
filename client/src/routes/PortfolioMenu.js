import React from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
export default function PortfolioMenu() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/portfolio/add">Create Portfolio</Link></li>
          <li><Link to="/portfolio/view">View Portfolio List</Link></li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  )
}
