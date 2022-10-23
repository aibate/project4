import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios'

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
       
    </div>
  )
}

export default Inbox