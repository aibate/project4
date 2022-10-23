import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Modal from './Modal';

function Contact() {
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
    function createEnquiry(){
        axios
        .post("/api/contact", enquiryDetail )
        .then(()=>{
        
        })
        .catch(error => alert(error.message));
    }
    console.log(enquiryDetail)
  return (
    <div>
        <input 
            name='client_name'
            placeholder='Full Name'
            onChange={handelChange}
            value={enquiryDetail.client_name} 
        />
        <input 
            name='email'
            placeholder='Email Address' 
            onChange={handelChange}
            values={enquiryDetail.email}
        />
        <textarea 
            name='enquiry' 
            placeholder='Enquiry'
            onChange={handelChange}
            values={enquiryDetail.enquiry}
        />
        <button onClick={createEnquiry}>Submit</button>
    </div>
   
  )
}

export default Contact