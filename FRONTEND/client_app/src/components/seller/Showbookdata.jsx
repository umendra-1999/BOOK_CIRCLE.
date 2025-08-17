import React from 'react'
import Bookdata from './Bookdata'
import { useState,useEffect } from "react"
import axios from "axios"
// import Header from "./Header"
const Showbookdata = () => {

    const [bookdata,setBookdata]=useState([])
    const URL="http://localhost:2302/seller/allbooks"
    
     
    useEffect(()=>{
      fetchbookdata()
    },[])

    const fetchbookdata=async()=>{
      try{
        const serverresponse= await axios.get(URL)
        console.log("serverresponse.data",serverresponse.data);
      setBookdata(serverresponse.data.bookdata)  
      }
      catch(e){
        console.log(e.message);
        
      }
    }
  return (
    <>
        <Bookdata bookdataArray={bookdata}/> 
        {/* here the <Bookdata/> is the name of the file where to show the data of this file and also the another {bookdata} is the name of state */}
    </>
  )
}

export default Showbookdata
