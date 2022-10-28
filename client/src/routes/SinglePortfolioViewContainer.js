import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
  
import Image from "react-bootstrap/Image";

function SinglePortfolioViewContainer(props) {

  return (
    <div>
        <h1>{props.jobTitle}</h1>
        <Image src={props.picture} alt="" roundedCircle></Image>
        <p>{props.description}</p>     
    </div>
  )
}

export default SinglePortfolioViewContainer