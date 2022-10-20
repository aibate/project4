import axios from 'axios'
import React, { useState, useEffect } from 'react'


function ViewPortfolio() {
  const [ AllPortfilisInfo, setAllPortfolioInfo ] = useState([]);

  useEffect(() =>{
    getData();
  },[])
  
  const getData =  () =>{
     const url = 'http://localhost:3001/api/portfolio'
      axios.get(url).then(response => {
        setAllPortfolioInfo(response.data);
      })
    } 
  


  

  

  console.log(AllPortfilisInfo)



  return (
    <div>View Portfolio</div>
  )
}

export default ViewPortfolio;