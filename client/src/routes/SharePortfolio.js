import React from 'react'
import { useParams } from "react-router-dom";
import { useState, useEffect }  from 'react'
import axios from 'axios'
import SinglePortfolioViewContainer from './SinglePortfolioViewContainer';
import Contact from '../components/Contact';
import Modal from '../components/Modal';

function SharePortfolio() {
  const {id} = useParams()
  const [ portfolioInfo, setPortfolioInfo] = useState([{
    portfolio_id:"",
    fullname:"",
    job_title:"",
    picture:'',
    description:''
  }])
  // eslint-disable-next-line
  let getPortfolioInfoWithId = () => {
    const url = `/api/portfolio/${id}`;
    axios.get(url).then(response => {
      setPortfolioInfo(response.data)
    })
  }
  useEffect(()=>{
    getPortfolioInfoWithId()
  },[getPortfolioInfoWithId])
  const [ openModal, setOpenModal ] = useState(false)

  console.log(portfolioInfo[0].fullname)
  return (
    <div>
        <SinglePortfolioViewContainer 
        fullname={portfolioInfo[0].fullname}
        jobTitle={portfolioInfo[0].job_title}
        picture={portfolioInfo[0].picture}
        description={portfolioInfo[0].description}
        key={portfolioInfo[0].portfolio_id}
        id={portfolioInfo[0].portfolio_id} 
        />
        <Contact handelContact={setOpenModal}/>
        {openModal && <Modal closeModal={setOpenModal}/>}
    </div>
  )
}

export default SharePortfolio
