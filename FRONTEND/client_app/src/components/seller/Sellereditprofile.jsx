import React from 'react'
import { useEffect,useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import axios from "axios"
import Swal from 'sweetalert2'
import styled from 'styled-components';
import SellerHeader from './SellerHeader'
import { Link } from 'react-router-dom'
import Footer from '../common/Footer'

const Sellereditprofile = () =>{  
    
     const navigate=useNavigate()
      const tokenEmail=localStorage.getItem("key",)
      const URL="http://localhost:2302/seller/sellerProfile"     
       const EDIT_PROFILE_URL="http://localhost:2302/seller/sellereditprofile"
      const [seller,setSeller]=useState({})

      useEffect(()=>{
       
        if(!tokenEmail||tokenEmail==null){
          navigate("/SellerLogin")
        }
        else{
          fetchsellerdetails() // function is asynchronous that,s why we call function first 
        }
    
      },[])
    
    
      const fetchsellerdetails=async()=>{
        try{
         const params={userEmail:tokenEmail}
    
        const serverrespon=await axios.get(URL,{params})
        console.log(serverrespon)
        setSeller(serverrespon.data.userobject)//setting seller profile details in seller object
        }
        catch(err){
            console.log(err.message);
            
              }
    }
       
  const fetchnewdata=(e)=>{
    setSeller({...seller,[e.target.name]:e.target.value})
    // console.log(buyer);
    
  }

  const submitdata=async(e)=>{
 e.preventDefault()
  try{

   const params={userEmail:tokenEmail}
   const serverresponse=await axios.put( EDIT_PROFILE_URL,seller,{params})
   const serverstatus=serverresponse.data.updatestatus

   if(serverstatus.acknowledged)
   {

    //  alert("👍👍Profile modified Successfully")
    

    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes,change it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "changes saved!",
          text: "Your details has been changed.",
          icon: "success"
        });
      }
    });
     navigate("/SellerProfile")
    }
  //  console.log(serverresponse.data.updatestatus);
   
  }
  catch(e){
   console.log(e.message);
   
  }
 
  }
      
  return (
    <>
    <SellerHeader/>
    {/* <Link to="/Searchresults"><button className="border-2">SearchBooks</button></Link> */}
    <form onSubmit={submitdata}>

    <div className=" bg-no-repeat image  h-screen bg-cover bg-[url(https://img.jakpost.net/c/2016/06/14/2016_06_14_6452_1465897206._large.jpg)]">
    <StyledWrapper>
  <div className="card relative left-148 top-40">
    <div className="relative top-30"> 

    <div className="card-info rounded-4xl opacity-55 w-2xl h-110 relative  text-black  justify-center ">

    
     
    <h1>NAME: <input className="border border-solid" type="text" name='userName' value={seller.userName}  required onChange={fetchnewdata}/></h1>
      <h1>CITY: <input className="border border-solid" type="text" name='userCity' value={seller.userCity}  required onChange={fetchnewdata}/></h1>
      <h1>NUMBER: <textarea className="border h-10 border-solid" name='userNo'  required value={seller.userNo} onChange={fetchnewdata}></textarea> </h1>
      <button className=" button w-20  h-8 ">Save</button>


    </div>
      {/* <Link className="relative bottom-40 p-2 border border-solid button " to="/Sellereditprofile">EDIT</Link> */}
    <div className="w-44 relative left-12">
    <img  className="rounded-full image w-50 relative left-60 bottom-106 " src={`http://localhost:2302/profilepics/${seller.pic}`}  />
    </div>
    </div>
    </div>
    </StyledWrapper>
    </div>
  </form>
  <Footer/>  
    </>
  )
}
const StyledWrapper = styled.div`
  .card {
    width: 350px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #fffffe;
    border-radius: 15px;
    position: relative;
    overflow: hidden;
  }

  .card::before {
    content: "";
    width: 350px;
    height: 100px;
    position: absolute;
    top: 0;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom: 3px solid #fefefe;
    background: linear-gradient(40deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
    transition: all 0.5s ease;
  }

  .card * {
    z-index: 1;
  }

  .image {
    width: 85px;
    height: 85px;
    background-color: #1468BF;
    border-radius: 50%;
    border: 4px solid #fefefe;
    margin-top: 30px;
    transition: all 0.5s ease;
  }

  .card-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    transition: all 0.5s ease;
  }

  .card-info span {
    font-weight: 600;
    font-size: 24px;
    color: #161A42;
    margin-top: 15px;
    line-height: 5px;
  }

  .card-info p {
    color: rgba(0, 0, 0, 0.5);
  }

  .button {
    text-decoration: none;
    background-color: #1468BF;
    color: white;
    padding: 5px 20px;
    border-radius: 5px;
    border: 1px solid white;
    transition: all 0.5s ease;
  }

  .card:hover::before {
    width: 350px;
    height: 300px;
    border-bottom: none;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    transform: scale(0.95);
  }

  .card:hover .card-info {
    transform: translate(0%,-25%);
  }

  .card:hover .image {
    transform: scale(2) translate(-100%,-60%);
  }

  .button:hover {
    background-color: #FF6844;
    transform: scale(1.1);
  }`;
export default Sellereditprofile
