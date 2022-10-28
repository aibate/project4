import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Modal from './ConfirmationModal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contact(props) {
    const {id} = useParams()
    const [ enquiryDetail, setEnquiryDetail] = useState({
        portfolio_id: id,
        client_name:'',
        email:'',
        enquiry:''  
    })
    function handelChange(event){
        const { value, name } = event.target;
    
        
        setEnquiryDetail((prevValue)=>{
            console.log(prevValue);
            if (name === 'client_name'){
                return {
                    portfolio_id: id,
                    client_name: value,
                    email:prevValue.email,
                    enquiry:prevValue.enquiry
                };
            }else if ( name === 'email'){
                return {
                    portfolio_id: id,
                    client_name: prevValue.client_name,
                    email: value,
                    enquiry: prevValue.enquiry
                };
            }else if (name === 'enquiry'){
                return {
                    portfolio_id: id,
                    client_name: prevValue.client_name,
                    email: prevValue.email,
                    enquiry: value,
                };
            }
        })
    }
    function createEnquiry(event){
        event.preventDefault();
        props.handelContact(true)
        axios
        .post("/api/contact", enquiryDetail )
        .then(()=>{
            
        })
        .catch(error => alert(error.message));
        setEnquiryDetail({
            portfolio_id: id,
        client_name:'',
        email:'',
        enquiry:'' 
        })
    }
    console.log(enquiryDetail)
  return (
    <div >
        <Form id="contactContainer">
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full Name</Form.Label>
                <Form.Control 
                type="text"
                name='client_name'
                placeholder='Full Name'
                onChange={handelChange}
                value={enquiryDetail.client_name}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
                <Form.Control 
                type="text"
                name='email'
                placeholder='Email Address' 
                onChange={handelChange}
                value={enquiryDetail.email}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enquiry</Form.Label>
            <Form.Control 
              name='enquiry' 
              placeholder='Enquiry'
              as="textarea"  
              onChange={handelChange}
              value={enquiryDetail.enquiry}
               />
          </Form.Group>
          <Button variant="primary" onClick={createEnquiry} >
            Submit
          </Button>
        </Form>
    </div>
   
  )
}

export default Contact