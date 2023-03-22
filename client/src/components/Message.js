import React from 'react'

function Message(props) {
    const { client_name, email, enquiry} = props.enquiryInfo
    // console.log(contact_id)
  return (
    <div>
       <div className='card'>
        <div className="card-body" style={{"width": "18rem"}}>
           
            <h5 className='card-title' data-testid="clientName">From: {client_name}</h5>
            <h6 className='card-subtitle mb-2 text-muted' data-testid="clientEmail">Email: {email}</h6>
            <p className='card-text' data-testid="enquiry">Comment: {enquiry}</p>
            
        </div>       
       </div>
    </div>
  )
}

export default Message