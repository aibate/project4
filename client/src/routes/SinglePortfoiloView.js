import React from 'react';
import SinglePortfolioViewContainer from './SinglePortfolioViewContainer';
import { useParams } from "react-router-dom";
import { useState, useEffect }  from 'react'
import axios from 'axios'

function SinglePortfolioView() {
  // refer from this website https://blog.webdevsimplified.com/2022-07/react-router/
  const {id} = useParams()
  const [ portfolioInfo, setPortfolioInfo] = useState([{
    portfolio_id:"",
    fullname:"",
    job_title:"",
    picture:'',
    description:''
  }])
  
  
  useEffect(()=>{

  const getPortfolioInfoWithId = () => {
    const url = `/api/portfolio/${id}`;
    axios.get(url).then(response => {
      setPortfolioInfo(response.data)
    })
  }
   
    getPortfolioInfoWithId()
  },[id])
 
  
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
    </div>
  )
}

export default SinglePortfolioView;
