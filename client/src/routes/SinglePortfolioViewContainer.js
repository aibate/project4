import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
  
import Image from "react-bootstrap/Image";

function SinglePortfolioViewContainer(props) {

  return (
    <div>
        
        <Image src={props.picture} alt="" roundedCircle></Image>
        <p>{props.jobTitle}</p>
        <p>{props.description}</p>     
    </div>
  )
}

export default SinglePortfolioViewContainer