import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

const Private = (props) => {
    const {Component}=props;
    const navigate=useNavigate();

    useEffect(()=>{
        let login=localStorage.getItem("loggedIn")
        if(!login){
            navigate("/login")
        }
    })
    

    return (
        <>
        <Component/>
        </>
    )

   
    }
  
  


export default Private
