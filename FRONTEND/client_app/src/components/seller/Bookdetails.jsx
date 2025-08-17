
    import { useState } from 'react'
    import Header from '../common/Header'
    import Footer from '../common/Footer'
    import { useNavigate } from 'react-router-dom'
    import axios from 'axios'
import React from 'react'

const Bookdetails = () => {


    
    
    const navigate=useNavigate()
    const URL="http://localhost:2302/seller/bookdetails"
    
    const[Bookdata,setBookdata]=useState({
      BookName:"",
      Category:"",
      Author:"",
      Publisher:"",
      userType:"",
      Description:"",
      Number:"",
    
    })
    
    const [userimg,setUserimg]=useState(null);
    const fetchdata=(e)=>{
      const{name,value,type,files}=e.target;
    
      if(type==="file"){
        console.log(files[0]);
        setUserimg(files[0])
        
      }
      else{
        setBookdata({...Bookdata,[name]:value})
      }
    };
    
    const submitData=async(e)=>{
      e.preventDefault()
      alert("in submit")
      console.log(userimg);
    
      const formData=new FormData();
      formData.append("BookName",Bookdata.BookName);
      formData.append("Category",Bookdata.Category);
      formData.append("Author",Bookdata.Author);
      formData.append("Publisher",Bookdata.Publisher);
      formData.append("Description",Bookdata.Description);
      formData.append("userType",Bookdata.userType);
      formData.append("Number",Bookdata.Number);
      formData.append("image",userimg)
      formData.append("SellerEmail",localStorage.getItem("key"))
      
      try{
        const resp=await axios.post(URL,formData)
        console.log(resp);
        alert(resp.data)
        //alert("Registration done successfully")
    
        setBookdata({
          BookName:"",
          Category:"",
          Author:"",
          Publisher:"",
          Description:"",
          Number:"",
          userType:""
    
        });
        setUserimg(null);
        navigate("/Mainpage")
        
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
      <label >BookName:</label>
    <input  className='border border-solid  m-4 w-64 h-10 relative left-5' type="text" name='BookName' placeholder="Enter the BookName" value={Bookdata.BookName} onChange={fetchdata}></input>
  </div>
   
   <div className='flex  items-center'>
    
    <label className="flex  items-center">Category:</label>
    <input className='border border-solid  m-4 w-64 h-10 relative left-6' type="text" name='Category' placeholder='Enter BookCategory' value={Bookdata.Category} onChange={fetchdata}></input>
   </div>
  
    <div  className="flex  items-center">

    <label>Author:</label>
    <input  className=' border border-solid  m-4 w-64 h-10 ' type="text" name='Author' placeholder='Enter Author Name' value={Bookdata.Author} onChange={fetchdata}></input>
    </div>
 
  <div className='flex  items-center'>

    <label>Publisher:</label>
    <input  className=' border border-solid  m-4 w-64 h-10 relative right-1.5' type="text"  name='Publisher'  placeholder="Enter Publisher Name" value={Bookdata.Publisher} onChange={fetchdata}></input>
  </div>
 

 <div className='flex  items-center'>

  <label>Price:</label>
  
  <input  className='m-3 relative left-6' name='userType' type="radio" value="Free" onChange={fetchdata}></input>
    <label className='relative left-5'>
      Free
    </label>
 
  <input className='m-3 relative left-6' name='userType' type="radio" value="Paid" onChange={fetchdata}></input>
  <label className='relative left-5' >
  Paid
</label>
 </div>


 <div className='flex  items-center'>

    {/* <label>Description</label> */}
     {/* <textarea  className=' relative left-12 flex border border-solid  m-4 w-64 h-10'  type="text" name='Description' value={Bookdata.Description} onChange={fetchdata}><textarea/> */}
    <h1 className=' relative bottom-4'>Description: <textarea className="border border-solid w-72 relative left-4 top-4" name='Description'  required value={Bookdata.Description} onChange={fetchdata}></textarea></h1>
    </div>
 



  
    <div className='flex  items-center'>

    <label>WhatsApp No.:</label>
     <input  className=' relative left-3 flex border border-solid  m-4 w-64 h-10'  type="text" name='Number' value={Bookdata.Number} onChange={fetchdata}></input>
    </div>
 
  
  <div className='flex  items-center'>

  <label >Bookimage:</label>
  <input  className='relative left-1 flex border border-solid  m-4 w-64 h-10' type="File" name='image' value={Bookdata.userimg} onChange={fetchdata}></input>
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

export default Bookdetails
