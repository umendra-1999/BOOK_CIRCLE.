
import { useState } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Buyer_registration = () => {
const navigate=useNavigate()
const URL="http://localhost:2302/buyer/buyerRegister"

const[buyerdata,setBuyerdata]=useState({
  userEmail:"",
  userName:"",
  userPassword:"",
  userNo:"",
  userType:"",
  userCity:"",
  userAddress:"",

})

const [userimg,setUserimg]=useState(null);
const fetchdata=(e)=>{
  const{name,value,type,files}=e.target;

  if(type==="file"){
    console.log(files[0]);
    setUserimg(files[0])
    
  }
  else{
    setBuyerdata({...buyerdata,[name]:value})
  }
};

const submitData=async(e)=>{
  e.preventDefault()
  alert("in submit")
  console.log(userimg);

  const formData=new FormData();
  formData.append("userEmail",buyerdata.userEmail);
  formData.append("userPassword",buyerdata.userPassword);
  formData.append("userName",buyerdata.userName);
  formData.append("userNo",buyerdata.userNo);
  formData.append("userCity",buyerdata.userCity);
  formData.append("userType",buyerdata.userType);
  formData.append("userAddress",buyerdata.userAddress);
  formData.append("pic",userimg)
  
  try{
    const resp=await axios.post(URL,formData)
    console.log(resp);
    alert(resp.data)
    alert("Registration done successfully")

    setBuyerdata({
      userEmail:"",
      userPassword:"",
      userName:"",
      userNo:"",
      userCity:"",
      userAddress:"",
      userType:""

    });
    setUserimg(null);
    navigate("/Buyerlogin")
    
  }
    
    catch(e){
      console.log(e.message);
      
    }
}


  
  return (
    <>
    <Header/>
    <div className='overflow-hidden'>
       <div className=" bg-no-repeat  h-screen bg-cover bg-[url(https://img.jakpost.net/c/2016/06/14/2016_06_14_6452_1465897206._large.jpg)]">


     <h1 className='text-3xl relative top-40 left-96'></h1>
     <div className=" opacity-80 flex-row relative left-94 bg-white w-2xl rounded-4xl flex justify-center items-center bottom-12 top-10  p-10">
    
     <form onSubmit={submitData} >

      <div className='flex  items-center'>
          <label >Name</label>
        <input  className='border border-solid  m-4 w-64 h-10 relative left-5' type="text" name='userName' placeholder="Enter the Name" value={buyerdata.userName} onChange={fetchdata}></input>
      </div>
       
       <div className='flex  items-center'>
        
        <label className="flex  items-center">Email</label>
        <input className='border border-solid  m-4 w-64 h-10 relative left-6' type="email" name='userEmail' placeholder='enter email' value={buyerdata.userEmail} onChange={fetchdata}></input>
       </div>
      
        <div  className="flex  items-center">

        <label>Password</label>
        <input  className=' border border-solid  m-4 w-64 h-10 ' type="password" name='userPassword' placeholder='enter password' value={buyerdata.userPassword} onChange={fetchdata}></input>
        </div>
     
      <div className='flex  items-center'>

        <label>Phone No.</label>
        <input  className=' border border-solid  m-4 w-64 h-10 relative right-1.5' type="text"  name='userNo'  placeholder="Enter your Mobile No." value={buyerdata.userNo} onChange={fetchdata}></input>
      </div>
     

     <div className='flex  items-center'>

      <label>Gender</label>
      
      <input  className='m-3 relative left-6' name='userType' type="radio" value="male" onChange={fetchdata}></input>
        <label className='relative left-5'>
          Male
        </label>
     
      <input className='m-3 relative left-6' name='userType' type="radio" value="female" onChange={fetchdata}></input>
      <label className='relative left-5' >
      Female
    </label>
     </div>
 
  
     <div className='flex  items-center'>

        <label>city</label>
         <input  className=' relative left-14 flex border border-solid  m-4 w-64 h-10' placeholder='Enter city name' type="text" name='userCity' value={buyerdata.userCity} onChange={fetchdata}></input>
        </div>
     
  


      
        <div className='flex  items-center'>

        <label>Address</label>
         <input  className=' relative left-3 flex border border-solid  m-4 w-64 h-10' placeholder='Enter Your Address'  type="text" name='userAddress' value={buyerdata.userAddress} onChange={fetchdata}></input>
        </div>
     
      
      <div className='flex  items-center'>

      <label >ProfilePic</label>
      <input  className='relative left-1 flex border border-solid  m-4 w-64 h-10' type="File" name='pic' value={buyerdata.userimg} onChange={fetchdata}></input>
      </div>
    
        <button  className='bg-amber-600 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-amber-900 relative bottom-4 flex border border-solid border-black m-4 w-auto left-36 ' type="submit" >Submit</button>
      
    </form>
    </div>
        </div>
       </div>
<Footer/>
      </>
  )
}

export default Buyer_registration
