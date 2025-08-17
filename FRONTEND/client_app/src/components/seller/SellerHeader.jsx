import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const SellerHeader = () => {




  const navigate=useNavigate()

  const logout=()=>{
      const tokenEmail= localStorage.getItem("key")
     if(!tokenEmail){
      navigate("/SellerLogin")
     }
     else{
  
     
     localStorage.removeItem(tokenEmail)
   navigate("/SellerLogin")
  }
  
  }
  


  return (
    <>
  

 
   <nav>
    
    <div className='flex justify-center overflow-hidden bg-cyan-200 '>
    <Link className='relative right-64 ' to="/"><img className='rounded-full relative right-44 w-18 h-18 ' src="images\logo.png" alt="" /></Link>
       
           <Link className="no-underline m-2 p-3" to="/">HOME</Link>
          <Link className="no-underline m-2 p-3" to="/Addedbooks">VIEW BOOKS</Link>

          <button className="no-underline m-2 p-3 relative bottom-1"> <Link to="/Searchresults">SEARCHBOOKS</Link></button> 
          <button className=" m-2 p-3 relative bottom-1"> <Link to="/Bookdetails">ADDBOOKS</Link></button> 
          


         <Link className="no-underline m-2 p-3 relative left-110 border border-solid rounded-3xl bg-red-300 hover:bg-red-800" to="/SellerLogin"><button onClick={logout}>logout</button></Link>




  </div>
  
</nav>
 </>
  )
}

export default SellerHeader
