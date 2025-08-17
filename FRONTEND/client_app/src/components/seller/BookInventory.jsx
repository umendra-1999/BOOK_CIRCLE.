import React from 'react'
import {useState } from "react"
import { useNavigate ,useLocation} from "react-router-dom"
import axios from "axios"

const BookInventory = () => {

const location = useLocation()
// const navigate=useNavigate()
const URL="http://localhost:2302/seller/updateinventory"

const[bookdata,setBookdata]=useState({
  SellerEmail:location.state.SellerEmail,
  buyerEmail:"",
  buyerName:"",
  buyerNo:"",
  bookId:location.state.id,

})

const fetchupdateddata=(e)=>{
        setBookdata({...bookdata,[e.target.name]:e.target.value})
        //console.log(feedbackdata)
      }




const submitData=async(e)=>{
  e.preventDefault()
  alert("in submit")

  try{
    
        const resp=await axios.post(URL,bookdata)
    console.log(resp);
    // alert(resp.data)

    setBookdata({
      SellerEmail:"",
      buyerName:"",
      buyerEmail:"",
      buyerNo:"",
      bookId:"",
    });
    
  }
    
    catch(e){
      console.log(e.message);
      
    }
}

  return (
    <>
       <div className='overflow-hidden'>
    <div className=" bg-no-repeat  h-screen bg-cover bg-[url(https://img.jakpost.net/c/2016/06/14/2016_06_14_6452_1465897206._large.jpg)]">


     <div className="opacity-80 shadow-2xl rounded-4xl bg-white flex-row  w-2xl relative left-98 flex justify-center items-center  top-2 p-10">
    
     <form onSubmit={submitData} >

      <div className='flex  items-center'>
          <label >Name</label>
        <input  className='border border-solid  m-4 w-64 h-10 relative left-5' type="text" name='buyerName' placeholder="Enter the Name" value={bookdata.buyerName} onChange={fetchupdateddata}></input>
      </div>
       
       <div className='flex  items-center'>
        
        <label className="flex  items-center">SellerEmail</label>
        <input className='border border-solid  m-4 w-64 h-10 relative left-6' type="email" name='SellerEmail' placeholder='enter seller email' value={bookdata.SellerEmail} onChange={fetchupdateddata}></input>
       </div>
      
        <div  className="flex  items-center">

        <label>buyerEmail</label>
        <input  className=' border border-solid  m-4 w-64 h-10 ' type="text" name='buyerEmail' placeholder='enter buyer email' value={bookdata.buyerEmail} onChange={fetchupdateddata}></input>
        </div>
     
      <div className='flex  items-center'>

        <label>Phone No.</label>
        <input  className=' border border-solid  m-4 w-64 h-10 relative right-1.5' type="text"  name='buyerNo'  placeholder="Enter your Mobile No." value={bookdata.buyerNo} onChange={fetchupdateddata}></input>
      </div>

      <div className='flex  items-center'>

        <label>Book id</label>
        <input  className=' border border-solid  m-4 w-64 h-10 relative right-1.5' type="text"  name='bookId'  placeholder="The book id is-:" value={bookdata.bookId} onChange={fetchupdateddata}></input>
      </div>
     

   
  
       <button  className='bg-amber-600 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-amber-900 relative bottom-4 flex border border-solid  m-4 w-auto left-36' type="submit" >Submit</button>
      
    </form>
    </div>
        </div>
</div>
    </>
  
)}


export default BookInventory
