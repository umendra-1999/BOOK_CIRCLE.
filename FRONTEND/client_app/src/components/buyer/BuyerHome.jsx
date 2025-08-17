
import { useEffect,useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import axios from "axios"
// import Register from "../../../../../BACKEND/server_app/models/buyer.model"
// import Searchbooks from "./Searchbooks"
import Searchresults from "./Searchresults"
import BuyerHeader from "./BuyerHeader"
import Footer from "../common/Footer"
import { Link } from "react-router-dom"
import styled from 'styled-components';



const BuyerHome = () => {

  const URL="http://localhost:2302/buyer/buyerProfile"
  const [buyer,setBuyer]=useState({})

  const navigate=useNavigate()
  const tokenEmail=localStorage.getItem("key",)
  useEffect(()=>{
   
    if(!tokenEmail||tokenEmail==null){
      navigate("/Buyerlogin")
    }
    else{
      fetchbuyerdetails() // function is asynchronous that,s why we call function first 
    }

  },[])


  const fetchbuyerdetails=async()=>{
    try{
     const params={userEmail:tokenEmail}

    const serverrespon=await axios.get(URL,{params})
    console.log(serverrespon)
    setBuyer(serverrespon.data.userobject)//setting buyer profile details in buyer object
    }
    catch(err){
  console.log(err.message);
  
    }
  }

  return (
    <>
    <BuyerHeader/>
    {/* <Link to="/Searchresults"><button className="border-2">SearchBooks</button></Link> */}
    <div className=" bg-no-repeat image  h-screen bg-cover bg-[url(https://img.jakpost.net/c/2016/06/14/2016_06_14_6452_1465897206._large.jpg)]">
    <StyledWrapper>
  <div className="card relative left-148 top-40">
    <div className="relative top-30"> 

    <div className="card-info rounded-4xl opacity-55 w-2xl h-110 relative  text-black  justify-center ">

    
      <h1 >ADDRESS: {buyer.userAddress}</h1>
      <h1 >CITY: {buyer.userCity}</h1>
      <h1>NUMBER: {buyer.userNo}</h1>


    </div>
      <Link className="relative bottom-40 p-2 border border-solid button " to="/Buyereditprofile">EDIT</Link>
    <div className="w-44 relative left-12">
    <img  className="rounded-full image w-50 relative left-60 bottom-100 " src={`http://localhost:2302/profilepics/${buyer.pic}`}  />
    </div>
    </div>
    </div>
    </StyledWrapper>
    </div>
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

export default BuyerHome
