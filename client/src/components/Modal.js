import React from 'react'

export default function Modal() {
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <button> X </button>
            <div className='title'>
                <h1> would you like to send this message?</h1>
            </div>
            <div className='body'>
                <p>Thank you for your message. We will contact you soon.</p>
            </div>
            <div className='footer'>
                <button> Cancel </button>
                <button> Submit</button>
            </div>
        </div>
        
    </div>
  )
}
