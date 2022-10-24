import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios'
import Message from './Message';

function Inbox() {
    const {id} = useParams()
    const [ enquiriesInfo, setEnquiriesInfo ] = useState([]);
    useEffect( () => {
        axios.get(`/api/contact/${id}`).then(response =>{
            setEnquiriesInfo(response.data);
        })
    },[])
  console.log(`/api/contact${id}`,enquiriesInfo)

  return (
    <div>
       {enquiriesInfo.map((oneEnquiryInfo, index) =>{
        return (
            <Message
                key={index} 
                enquiryInfo={oneEnquiryInfo}/>
                
        )
       })}
    </div>
  )
}

export default Inbox