import React, { useState } from 'react'
import axios from 'axios';


function CreatePortfolio() {
    const [ portfolioInfo, setPortfolioInfo] = useState({
        fullname:'',
        job_title:'',
        picture:'',
        description:''
    });
    
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
    
    const createPortfolio = (event) =>{
      axios
      .post('/api/portfolio', portfolioInfo)
      .then(()=>{
        window.location='/portfolio/view';
      })
      .catch(error => alert(error.message));
    }
  return (
    <div>
        <input 
            name='fullname'
            placeholder="Full Name"
            onChange={handelChange} 
            value={portfolioInfo.fullname}
        />
        <input 
            name='job_title'
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