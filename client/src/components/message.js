import React from 'react'

function Message(props) {
    
    // console.log(props.enquiryInfo)
    const { client_name, email, enquiry} = props.enquiryInfo
    // console.log(contact_id)
  return (
    <div>
        <p data-testid="clientName">{client_name}</p>
        <p data-testid="clientEmail">{email}</p>
        <p data-testid="enquiry">{enquiry}</p>
    </div>
  )
}

export default Message