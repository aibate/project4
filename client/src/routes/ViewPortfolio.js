import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function ViewPortfolio() {
  // store all portfolio in state
  const [ AllPortfoliosInfo, setAllPortfolioInfo ] = useState([]);
  // when this component is mounted, then fetch data from backend by using uesEffect
  useEffect(() =>{
    getData();
  },[])
  
  const getData =  () =>{
     const url = '/api/portfolio'
      axios.get(url).then(response => {
        setAllPortfolioInfo(response.data);
      })
    } 
  
 const deletePortfolio = (event) => {
    event.preventDefault();
    console.log(event.target.id)
    const url = `/api/portfolio/${event.target.id}`
    console.log(event.target.id, url)
    axios.delete(url).then(() =>{
      window.location = "/portfolio/view"
    })
  } 

  return (
    <div>
      <h1>Portfolio list</h1>
      <ul>  
          {AllPortfoliosInfo.map((onePortfolioInfo) => {
            return(
              <div className='card' >
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item' key={onePortfolioInfo.portfolio_id}>
                    <Link to={ `/portfolio/view/${onePortfolioInfo.portfolio_id}`}>
                      {onePortfolioInfo.fullname}
                    </Link>
                    <Link className='btn btn-success' to={`/portfolio/update/${onePortfolioInfo.portfolio_id}`} >Update</Link>
                    <button id={onePortfolioInfo.portfolio_id} className='btn btn-danger' onClick={deletePortfolio}>Delete</button>
                    <Link className="btn btn-info" to={`/client/${onePortfolioInfo.portfolio_id}`} >Share</Link>
                    <Link className="btn btn-primary" to={`/inbox/${onePortfolioInfo.portfolio_id}/`} >Inbox</Link>
                  </li>
                </ul>
              </div>
            )
          })}
      </ul>
      <Outlet/>
    </div>
    
  )
}

export default ViewPortfolio;