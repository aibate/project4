import React, { useState } from 'react'
import axios from 'axios';

function CreatePortfolio() {
    const [ portfolioInfo, setPortfolioInfo] = useState({
        fullName:'',
        jobTitle:'',
        picture:'',
        description:''
    });
    
    
    console.log(portfolioInfo)
    function handelChange(event){
        const { value, name } = event.target;
        setPortfolioInfo((prevValue) => {
            console.log(prevValue);
            if (name === "fullName") {
              return {
                fullName: value,
                jobTitle: prevValue.jobTitle,
                picture: prevValue.picture,
                description: prevValue.description
              };
            } else if (name === "jobTitle") {
              return {
                fullName: prevValue.fullName,
                jobTitle: value,
                picture: prevValue.picture,
                description: prevValue.description
              };
            } else if (name === "picture") {
              return {
                fullName: prevValue.fullName,
                jobTitle: prevValue.jobTitle,
                picture: value,
                description: prevValue.description
              };
            }else if (name === "description") {
              return {      
                fullName: prevValue.fullName,
                jobTitle: prevValue.jobTitle,
                picture: prevValue.picture,
                description: value
              };
            }
          });
    }
    console.log(portfolioInfo)
    const createPortfolio = (event) =>{
      console.log(portfolioInfo)
      event.preventDefault();
      axios
      .post('/api/portfolio', portfolioInfo)
      .then(response =>{
        console.log("data is sent")
      })
      .catch(error => alert(error.message));
    }
  return (
    <div>
        <input 
            name='fullName'
            placeholder="Full Name"
            onChange={handelChange} 
            value={portfolioInfo.fullName}
        />
        <input 
            name='jobTitle'
            placeholder='Job Title'
            onChange={handelChange}
            value={portfolioInfo.jobTitle} 
        />
        <input 
            name='picture'
            placeholder='Picture URL' 
            onChange={handelChange}
            values={portfolioInfo.picture}
        />
        <textarea 
            name='description' 
            placeholder='Description'
            onChange={handelChange}
            values={portfolioInfo.description}
        />
        <button onClick={createPortfolio}>submit</button>
    </div>
  )
}

export default CreatePortfolio;