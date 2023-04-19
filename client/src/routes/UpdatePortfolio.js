import React from 'react'
import { useParams } from "react-router-dom";
import { useState, useEffect }  from 'react'
import axios from 'axios'

function UpdatePortfolio() {
  const {id} = useParams()  
  const [ portfolioInfo, setPortfolioInfo] = useState({
    fullname:'',
    job_title:'',
    picture:'',
    description:''
  });
   
  useEffect(()=>{
    const getData = () => {
      const url = `/api/portfolio/${id}`;
      axios.get(url).then(response => {
        setPortfolioInfo(response.data[0])
      })
    }
    getData()
  },[id])

 
  function handelChange(event){
    const { value, name } = event.target;
    setPortfolioInfo((prevValue) => {
        console.log(prevValue);
        if (name === "fullname") {
          return {
            fullname: value,
            job_title: prevValue.job_title,
            picture: prevValue.picture,
            description: prevValue.description
          };
        } else if (name === "job_title") {
          return {
            fullname: prevValue.fullname,
            job_title: value,
            picture: prevValue.picture,
            description: prevValue.description
          };
        } else if (name === "picture") {
          return {
            fullname: prevValue.fullname,
            job_title: prevValue.job_title,
            picture: value,
            description: prevValue.description
          };
        }else if (name === "description") {
          return {      
            fullname: prevValue.fullname,
            job_title: prevValue.job_title,
            picture: prevValue.picture,
            description: value
          };
        }
      });
  }

  const updatePortfolio = () => {
    const url = `/api/portfolio/${id}`;
    console.log(url)
    axios.put(url, portfolioInfo)
    .then(() => {
      window.location=`/portfolio/view/${id}`
    })
  };



  console.log(portfolioInfo)
  return (
    <div>
      <div className='<div class="input-group mb-3">'>
        <input 
            name='fullname'
            className='"form-control"'
            placeholder="Full Name"
            onChange={handelChange}
            value={portfolioInfo.fullname}></input>
      </div>
      
      <div className='<div class="input-group mb-3">'>
      
      <input 
          name='job_title'
          placeholder='Job Title'
          onChange={handelChange}
          value={portfolioInfo.job_title} 
          />
      </div>
      <div className='<div class="input-group mb-3">'>
      <input 
          name='picture'
          placeholder='Picture URL' 
          onChange={handelChange}
          value={portfolioInfo.picture}
          />
      </div>
      <div className='<div class="input-group mb-3">'>
        <textarea 
          name='description' 
          placeholder='Description'
          onChange={handelChange}
          value={portfolioInfo.description}
        />
      </div>
      
      
      <button className='btn btn-success' onClick={updatePortfolio}>Update</button>
      
    </div>
  )
}

export default UpdatePortfolio
