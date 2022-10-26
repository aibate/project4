import React from 'react'

function SinglePortfolioViewContainer(props) {

  return (
    <div>
        
        <img src={props.picture} alt=""></img>
        <p>{props.jobTitle}</p>
        <p>{props.description}</p>     
    </div>
  )
}

export default SinglePortfolioViewContainer