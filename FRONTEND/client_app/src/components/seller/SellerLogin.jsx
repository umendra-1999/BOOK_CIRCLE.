import React from 'react'
import { useState } from "react"
import Header from "../common/Header"
import Footer from "../common/Footer"
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom"
import axios from 'axios'


const SellerLogin = () => {

   const [sellerdata,setSellerdata]=useState({
    sellerId:"",
    sellerPass:"",
   })

   const navigate=useNavigate();
  
   const URL="http://localhost:2302/seller/SellerLogin" // backend route path
 
     
   const fetchdata=(e)=>{
    setSellerdata({...sellerdata,[e.target.name]:e.target.value})
    // console.log(sellerdata);
    

   }


   const submitdata=async(e)=>{
    e.preventDefault()
    // console.log(sellerdata)
    try{
      const serverresp=await axios.post(URL,sellerdata)
      console.log(serverresp);
      
      if(serverresp.data.status==="Success"){
      
       localStorage.setItem("key",serverresp.data.token)//here key is like nameor key (rollno) and value is like value of the roll no.
 
       alert(serverresp.data.message)
       navigate("/SellerHome")
      }
      else{
       alert(serverresp.data.message)
      }
      
     }
     catch(e){
       console.log(e.message);
       
     }
     
   }
   
    return (
        <>
      <div className=" bg-no-repeat  h-screen bg-cover bg-[url(https://img.jakpost.net/c/2016/06/14/2016_06_14_6452_1465897206._large.jpg)]">
      <Header/>
     
      <div className= "flex flex-row rounded-4xl h-84 relative left-96 top-44 opacity-80 bg-white w-2xl  ">

    <form onSubmit={submitdata}>

      <label className="top-12  left-24 relative" >Email:</label>
      <input className=" border border-solid m-3 w-96 h-12 relative left-22 top-12" type="text" placeholder="Email" name="sellerId" value={sellerdata.sellerId} onChange={fetchdata} />
      <label className="relative top-34 right-96">Password:</label>
      <input className=" border border-solid m-3 w-96 h-12  relative left-32 top-16" type="password" placeholder="Password"  name="sellerPass" value={sellerdata.sellerPass} onChange={fetchdata}/>
      <button className="  bg-amber-600 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-amber-900 border border-solid border-black m-3 p-2 rounded-md relative right-32 top-36">submit</button>
    
     <Link className='relative top-36 left-50 flex ' to="/SellerRegister">New to Bookcircle? Sign up for an account</Link>
    </form> 
      
   {/* <button className="border border-solid border-black bg-amber-400 relative left-56 top-76"> <Link to="/Feedback">feedback</Link></button> */}
     </div>
      </div>
      <Footer/>
    </>
  )
}

export default SellerLogin;
