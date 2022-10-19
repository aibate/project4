import React, { useState } from 'react'
import axios from 'axios';

function CreatePortfolio() {
    const [ portfolioInfo, setPortfolioInfo] = useState({
        fullName:'',
        jobTitle:'',
        picture:'',
        description:''
    })
    
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
                picture: prevValue.pictureURL,
                description: prevValue.description
              };
            } else if (name === "pictureURL") {
              return {
                fullName: prevValue.fullName,
                jobTitle: prevValue.jobTitle,
                pictureURL: value,
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
            name='pictureURL'
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
        <button>submit</button>
    </div>
  )
}

export default CreatePortfolio;