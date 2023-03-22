import React from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
export default function PortfolioMenu() {
  return (
    <div>
      <nav className='navbar navbar-light bg-light'>
       
          <h1 className="navbar-brand">Profolio.</h1>
          <div className="collapse navbar-collapse" id='navbarSupportedContent'></div>
          <ul className="navbar-nav mr-auto">
          <li className='nav-item active'><Link className='nav-link' to="/portfolio/add">Create Portfolio</Link></li>
          
          <li className='nav-item active'><Link className='nav-link' to="/portfolio/view">Portfolio List</Link></li>
        
          </ul>
      </nav>
      <Outlet/>
    </div>
  )
}
