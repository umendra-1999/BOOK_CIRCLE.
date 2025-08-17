

import { useState } from "react"
import Header from "../common/Header"
import Footer from "../common/Footer"
// import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import axios from "axios"



const Adminlogin = () => {

   const [admindata,setAdmindata]= useState({
    adminId:"",
    adminPass:"",
   })

   const navigate=useNavigate();

   const URL="http://localhost:2302/admin/Adminlogin"

   const fetchdata=(e)=>{
    setAdmindata({...admindata,[e.target.name]:e.target.value})
    // console.log(admindata);
    

   }


   const submitdata=async(e)=>{
    e.preventDefault()

    if(admindata.adminId==""){
      alert("please enter the email")
    document.getElementById("adminId").focus()
    return
    }
    else if(admindata.adminPass==""){
       alert("please enter the password")
       document.getElementById("adminPass").focus()
       return
      }
      
      // console.log(admindata)
      else{
      try{
       const serverresponse=await axios.post (URL,admindata)
       console.log(serverresponse)
       if(serverresponse.data.status==="Success"){
         // localStorage.setitem("key",serverresponse.data.token)
         alert(serverresponse.data.message)
         navigate("/Adminhome")
       }
       else{
        alert(serverresponse.data.message)
       }

      }
      catch(e){
        console.log(e.message);
        
      }
    }
   }
    return (
        <>
      <Header/>
      <div className=" bg-no-repeat  h-screen bg-cover bg-[url(https://img.jakpost.net/c/2016/06/14/2016_06_14_6452_1465897206._large.jpg)]">
      <div className="flex flex-col  w-96 h-68 relative top-56 left-96  ">

    <form className="bg-white rounded-4xl opacity-80 relative left-32 w-xl h-96" onSubmit={submitdata}>

      <label className="top-12  left-24 relative" >Email:</label>
      <input className=" border border-solid  m-3 w-96 h-12 relative left-22 top-12" type="text" id="adminId" placeholder="Emailid" name="adminId" value={admindata.adminId} onChange={fetchdata} />
      <label className="relative top-34 right-96">Password:</label>
      <input className=" border border-solid  m-3 w-96 h-12  relative left-32 top-16" type="password" id="adminPass" placeholder="Password"  name="adminPass" value={admindata.adminPass} onChange={fetchdata}/>
      <button className=" border border-solid  m-3 p-2 rounded-md relative right-32 top-36">submit</button>
    </form> 
      </div>
   </div>
      <Footer/>
    </>
  )
}

export default Adminlogin
