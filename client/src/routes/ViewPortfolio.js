import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
     
      <Row lg={3}>

          {AllPortfoliosInfo.map((onePortfolioInfo) => {
            return(
              <Col className="d-flex">
              <Card className="flex-fill" style={{ width: '18rem' }}>
                <Card.Body key={onePortfolioInfo.portfolio_id}>
                  <Card.Title>{onePortfolioInfo.fullname}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{onePortfolioInfo.job_title}</Card.Subtitle>
                  <Card.Text>
                    {onePortfolioInfo.description}
                  </Card.Text>
                  <Card.Link as={Link} to={ `/portfolio/view/${onePortfolioInfo.portfolio_id}`}>View</Card.Link>
                  <Card.Link as={Link} to={`/portfolio/update/${onePortfolioInfo.portfolio_id}`}>Update</Card.Link>
                  <Card.Link as={Link} to={`/client/${onePortfolioInfo.portfolio_id}`} >Share</Card.Link>
                  <Card.Link as={Link} to={`/inbox/${onePortfolioInfo.portfolio_id}/`} >Inbox</Card.Link>
                  <button id={onePortfolioInfo.portfolio_id} className='btn btn-danger' onClick={deletePortfolio}>Delete</button>
                  </Card.Body>
                </Card>
              </Col>
              
              )
            })}
      
      </Row>
      <Outlet/>
    </div>
    
  )
}

export default ViewPortfolio;