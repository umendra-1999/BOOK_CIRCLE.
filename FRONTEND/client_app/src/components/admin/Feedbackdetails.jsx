
import Showfeedbackdetails from "./Showfeedbackdetails"
import { useState,useEffect } from "react"
import axios from "axios"
import Header from "../common/Header"

const Feedbackdetails = () => {


    const [feedbackdata,setFeedbackdata]=useState([])
    const URL="http://localhost:2302/admin/allfeedback"

    useEffect(()=>{
      fetchfeedback()
    },[])

    const fetchfeedback=async()=>{
      try{
        const serverresponse= await axios.get(URL)
        console.log(serverresponse.data.feedbackQuery);
      setFeedbackdata(serverresponse.data.feedbackQuery)  
      }
      catch(e){
        console.log(e.message);
        
      }
    }
  return (
    <>
    <Header/>
    
      <Showfeedbackdetails feedbackArray={feedbackdata}/>
    </>
  )
}

export default Feedbackdetails
