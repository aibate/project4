import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
      event.preventDefault();
      axios
      .post('/api/portfolio', portfolioInfo)
      .then(()=>{
        window.location='/portfolio/view';
      })
      .catch(error => alert(error.message));
    }
  return (
    <div>
      <h3>Create your portfolio</h3>
      
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control 
              type="text"
              name='fullname' 
              placeholder="Full Name"
              onChange={handelChange}
              value={portfolioInfo.fullname}
              data-testid="nameInput" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Job Title</Form.Label>
            <Form.Control 
              type="text"
              name='job_title' 
              placeholder="Job Title"
              onChange={handelChange}
              value={portfolioInfo.job_title} 
              data-testid="titleInput" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Picture URL</Form.Label>
            <Form.Control 
              type="text"
              name='picture' 
              placeholder='Picture URL' 
              onChange={handelChange}
              value={portfolioInfo.picture}
              data-testid="pictureInput" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Description</Form.Label>
            <Form.Control 
              name='description'
              placeholder='Description'
              as="textarea"  
              onChange={handelChange}
              value={portfolioInfo.description}
              data-testid="descriptionTextarea" />
          </Form.Group>
          <Button variant="primary" onClick={createPortfolio} data-testid="submitBtn">
            Submit
          </Button>
        </Form>    
        
    </div>
  )
}

export default CreatePortfolio;