import React from 'react'
import { useParams } from "react-router-dom";
import { useState, useEffect }  from 'react'
import axios from 'axios'
import SinglePortfolioViewContainer from './SinglePortfolioViewContainer';
import Contact from '../components/Contact';
import ConfirmationModal from '../components/ConfirmationModal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

function SharePortfolio() {
  const {id} = useParams()
  const [ portfolioInfo, setPortfolioInfo] = useState([{
    portfolio_id:"",
    fullname:"",
    job_title:"",
    picture:'',
    description:''
  }])
  useEffect(()=>{
    getPortfolioInfoWithId()
  },[])
  const [ openModal, setOpenModal ] = useState(false)
  const handleClose = () => setOpenModal(false);
  const handleShow = () => setOpenModal(true);
  
  const getPortfolioInfoWithId = () => {
    const url = `/api/portfolio/${id}`;
    axios.get(url).then(response => {
      setPortfolioInfo(response.data)
    })
  }
  console.log(portfolioInfo[0].fullname)
  return (
    <div>
       <Row lg={2}>
       <Col className="d-flex">
       <SinglePortfolioViewContainer 
        fullname={portfolioInfo[0].fullname}
        jobTitle={portfolioInfo[0].job_title}
        picture={portfolioInfo[0].picture}
        description={portfolioInfo[0].description}
        key={portfolioInfo[0].portfolio_id}
        id={portfolioInfo[0].portfolio_id} 
        />
        </Col>
        <Col className="d-flex">
        <Contact handelContact={handleShow}/>
        {openModal && <ConfirmationModal closeModal={handleClose}/>}
        </Col>
      </Row>
        
    </div>
  )
}

export default SharePortfolio