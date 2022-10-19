import React, { useState }  from "react";


function Header(props) {
    // if(props.loginStatus)
    return (
        <>
        <h1> Welcome to Profolio App</h1>
       
        <button> {!props.loginStatus ?"Login/sign in": "Sign out"}</button>
        
       
        </>
    )
}
export default Header;