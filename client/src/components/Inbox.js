import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios'
import Message from './Message';

function Inbox() {
    let { id } = useParams()
    const [ enquiriesInfo, setEnquiriesInfo ] = useState([]);
    useEffect( () => {
        let isCurrent = true;
        axios.get(`/api/contact/${id}`).then(response =>{
            setEnquiriesInfo(response.data);
        })
        return () => { isCurrent = false }
    },[id])
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
