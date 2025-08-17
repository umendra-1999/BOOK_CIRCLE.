import Header from "../common/Header"
import Footer from "../common/Footer"
import {useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { Link } from "react-router-dom"


const Buyerlogin = () => {
  const [buyerdata,setBuyerdata]=useState({
    userEmail:"",
    userPassword:"",
    
  })
  
  const navigate=useNavigate();
  
  const URL="http://localhost:2302/buyer/Buyerlogin" // backend route path

  const fetchdetail=(e)=>{
    setBuyerdata({...buyerdata,[e.target.name]:e.target.value})
  
  }


  const submitdetails=async(e)=>{
    e.preventDefault()
    // console.log(buyerdata);

                 //validation code for mandatory fields 
           if(buyerdata.userEmail==""){
            alert("please enter the email")
            document.getElementById("userEmail").focus()
            return
           } 
           else if(buyerdata.userPassword==""){
            alert("please enter the password")
            document.getElementById("userPassword").focus()
            return
           } 
          //  else if(buyerdata.userPassword.length<=8){
          //   alert("password length must be greater than 8 character")  this code is for registration  page
          //   document.getElementById("userPassword").focus()
          //   return
          //  }    
       else{ 
    try{
     const serverresp=await axios.post(URL,buyerdata)
     console.log(serverresp);
     
     if(serverresp.data.status==="Success"){
     
      localStorage.setItem("key",serverresp.data.token)//here key is like name or key (rollno) and value is like value of the roll no.

      alert(serverresp.data.message)
      navigate("/BuyerHome")
     }
     else{
      alert(serverresp.data.message)
     }
    
    }
    catch(e){
      console.log(e.message);
      
    }
  }
    
  }
  return (

    <>
    <div className=" bg-no-repeat  h-screen bg-cover bg-[url(https://img.jakpost.net/c/2016/06/14/2016_06_14_6452_1465897206._large.jpg)]">
    <Header/>

    <div className=" opacity-80 bg-white rounded-4xl relative left-96 top-44 flex flex-row h-88 w-2xl p-20  ">
    <form onSubmit={submitdetails}>
           <label className="flex">Email:
      <input  className="border border-solid  m-3 flex w-96 h-12 relative bottom-4" type="text" id="userEmail" name="userEmail" placeholder="enter the name" value={buyerdata.userEmail}  onChange={fetchdetail}/></label>
      <label className="flex relative right-7">Password:
      <input  className="border border-solid  m-3 flex w-96 h-12 relative bottom-5" type="password" id="userPassword" name="userPassword" placeholder="enter the password" value={buyerdata.userPassword} onChange={fetchdetail} /></label>
       <button  className=" bg-amber-600 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-amber-900 relative left-42 border border-solid border-black m-4 p-2 flex ">submit</button>   
    
    <Link className=" relative left-32" to="/Buyer_registration" >New to Bookcircle? Sign up for an account</Link>
    </form>
    </div>
    </div>
    <Footer/>
     </>
  )
}

export default Buyerlogin
