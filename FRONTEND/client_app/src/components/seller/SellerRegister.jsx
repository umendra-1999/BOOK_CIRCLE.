
import { useState } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const SellerRegister = () => {
const navigate=useNavigate()
const URL="http://localhost:2302/seller/sellerRegister"

const[sellerdata,setSellerdata]=useState({
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
    setSellerdata({...sellerdata,[name]:value})
  }
};

const submitData=async(e)=>{
  e.preventDefault()
  alert("in submit")
  console.log(userimg);

  const formData=new FormData();
  formData.append("userEmail",sellerdata.userEmail);
  formData.append("userPassword",sellerdata.userPassword);
  formData.append("userName",sellerdata.userName);
  formData.append("userNo",sellerdata.userNo);
  formData.append("userCity",sellerdata.userCity);
  formData.append("userType",sellerdata.userType);
  formData.append("userAddress",sellerdata.userAddress);
  formData.append("pic",userimg)
  
  try{
    const resp=await axios.post(URL,formData)
    console.log(resp);
    alert(resp.data)
    alert("Registration done successfully")

    setSellerdata({
      userEmail:"",
      userPassword:"",
      userName:"",
      userNo:"",
      userCity:"",
      userAddress:"",
      userType:""

    });
    setUserimg(null);
    navigate("/Sellerlogin")
    
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


     {/* <h1 className='text-3xl relative top-24 left-96'>Register Your-self Here!</h1> */}
     <div className="opacity-80 shadow-2xl rounded-4xl bg-white flex-row  w-2xl relative left-98 flex justify-center items-center  top-2 p-10">
    
     <form onSubmit={submitData} >

      <div className='flex  items-center'>
          <label >Name</label>
        <input  className='border border-solid  m-4 w-64 h-10 relative left-5' type="text" name='userName' placeholder="Enter the Name" value={sellerdata.userName} onChange={fetchdata}></input>
      </div>
       
       <div className='flex  items-center'>
        
        <label className="flex  items-center">Email</label>
        <input className='border border-solid  m-4 w-64 h-10 relative left-6' type="email" name='userEmail' placeholder='enter email' value={sellerdata.userEmail} onChange={fetchdata}></input>
       </div>
      
        <div  className="flex  items-center">

        <label>Password</label>
        <input  className=' border border-solid  m-4 w-64 h-10 ' type="password" name='userPassword' placeholder='enter password' value={sellerdata.userPassword} onChange={fetchdata}></input>
        </div>
     
      <div className='flex  items-center'>

        <label>Phone No.</label>
        <input  className=' border border-solid  m-4 w-64 h-10 relative right-1.5' type="text"  name='userNo'  placeholder="Enter your Mobile No." value={sellerdata.userNo} onChange={fetchdata}></input>
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
         <input  className=' relative left-12 flex border border-solid  m-4 w-64 h-10'  type="text" name='userCity' value={sellerdata.userCity} onChange={fetchdata}></input>
        </div>
     
  


      
        <div className='flex  items-center'>

        <label>Address</label>
         <input  className=' relative left-3 flex border border-solid  m-4 w-64 h-10'  type="text" name='userAddress' value={sellerdata.userAddress} onChange={fetchdata}></input>
        </div>
     
      
      <div className='flex  items-center'>

      <label >ProfilePic</label>
      <input  className='relative left-1 flex border border-solid  m-4 w-64 h-10' type="File" name='pic' value={sellerdata.userimg} onChange={fetchdata}></input>
      </div>
    
        <button  className='bg-amber-600 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-amber-900 relative bottom-4 flex border border-solid  m-4 w-auto left-36' type="submit" >Submit</button>
      
    </form>
    </div>
        </div>
</div>
<Footer/>
    </>
  )
}

export default SellerRegister;
