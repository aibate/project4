import React from 'react'

function SinglePortfolioViewContainer(props) {

  return (
    <div>
        <p>{props.jobTitle}</p>
        <img src={props.picture} alt=""></img>
        <p>{props.description}</p>     
    </div>
  )
}

export default SinglePortfolioViewContainer