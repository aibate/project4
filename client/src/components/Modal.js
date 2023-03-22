import React from 'react'

export default function Modal(props) {
    function handleXbutton (){
        props.closeModal(false)
    }
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            
            <div className='title'>
               <h1>Thank you for your message.</h1>
            </div>
            <div className='body'>
                <p> We will contact you soon.</p>
            </div>
            <div className='footer'>
                <button onClick={handleXbutton}> close </button>
                
            </div>
        </div>
        
    </div>
  )
}
