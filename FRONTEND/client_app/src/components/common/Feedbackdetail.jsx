
import Showfeedbackdetail from "./Showfeedbackdetail"
import { useState,useEffect } from "react"
import axios from "axios"
import Header from "./Header"

const Feedbackdetail = () => {


    const [feedbackdata,setFeedbackdata]=useState([])
    const URL="http://localhost:2302/allfeedback"

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
    
    
      <Showfeedbackdetail feedbackArray={feedbackdata}/>
    </>
  )
}

export default Feedbackdetail
