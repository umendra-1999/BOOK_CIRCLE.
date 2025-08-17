import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import Contactdetails from "./Contactdetails"
import Header from '../common/Header'

const Allcontacts = () => {


    const [contactdata,setContactdata]=useState([])
    const URL="http://localhost:2302/admin/Allcontacts"

    useEffect(()=>{
      fetchcontacts()
    },[])

    const fetchcontacts=async()=>{
      try{
        const serverresponse= await axios.get(URL)
        console.log(serverresponse.data.contactQuery);
      setContactdata(serverresponse.data.contactQuery)  
      }
      catch(e){
        console.log(e.message);
        
      }
    }
  return (
    <>
    <Header/>
    
      <Contactdetails contactArray={contactdata}/>
    </>
  )
}

export default Allcontacts
