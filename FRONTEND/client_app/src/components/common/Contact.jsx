import Header from "./Header"
import Footer from "./Footer"
import { useState } from "react"

import axios from 'axios'



const Contact = () => {


  const URL="http://localhost:2302/addContact"


  const [contactData,setContactData]=useState({
    userName:"",
    userEmail:"",
    userQuery:"",
  })

  const fetchData=(e)=>{
  //  console.log(e.target.name); it will showm the targeted value or name of the target
  //  console.log(e.target.value);
  // ... spread operator copies object properties values into object
   setContactData({...contactData,[e.target.name]:e.target.value})
   //console.log(contactData);
  }

  const submitData=async(e)=>{
  e.preventDefault()
  console.log(contactData);
  try{
    const serverresponse=await axios.post(URL,contactData)
    console.log(serverresponse);
    
    const msg = serverresponse.data.message;
    alert(msg)
  }
  catch(error){
    console.log(error.message);
    }

  }

  return (



    <>
    <Header/>
  <div className=" bg-no-repeat  h-screen bg-cover bg-[url(https://img.jakpost.net/c/2016/06/14/2016_06_14_6452_1465897206._large.jpg)]">
    <div className="flex flex-row bg-white w-110 rounded-2xl relative p-4 top-48 left-96 ">
  
    
     <form onSubmit={submitData}>
      <label  >enter the name</label>
      <input className="border-solid border-2 border-black-500 w-96 m-2 p-2" type="text"  name="userName" placeholder="Name"  value={contactData.userName} onChange={fetchData}/>

      <label>enter the email</label>
      <input type="text" className="border-solid border-2 border-black-500 m-2 w-96 p-2"  name="userEmail" placeholder="E-mail" value={contactData.userEmail} onChange={fetchData} />


      <label>enter the query</label>
      <input type="text" className="border-solid border-2 border-black-500 m-2 w-96 p-2" name="userQuery" placeholder=" Query?" value={contactData.userQuery} onChange={fetchData}/>
      <button className="border-solid border-2 border-black relative right-6 m-10 bg-blue-200 p-2 rounded-md">submit</button>
        
      </form>
  </div>
      </div>
        <Footer/>
        
        </>
  )
}

export default Contact
