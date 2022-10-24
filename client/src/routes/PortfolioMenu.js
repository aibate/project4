import React from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
export default function PortfolioMenu() {
  return (
    <div>
      <nav className=''>
       
          <h1>Profolio.</h1>
          <button className='navbar-toggler'><Link className='navbar-toggler' to="/portfolio/add">Create Portfolio</Link></button>
          <li><Link to="/portfolio/view">View Portfolio List</Link></li>
        
      </nav>
      <Outlet/>
    </div>
  )
}
