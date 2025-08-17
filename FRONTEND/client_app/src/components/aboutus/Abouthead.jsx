import {Link} from 'react-router-dom'
const Abouthead = () => {
  return (
    <>
  

 
   <nav>
    
    <div className='flex justify-center bg-cyan-200 '>
    <Link className='relative right-110' to="/"><img className='rounded-full relative right-44 w-18 h-18 ' src="images\logo.png" alt="" /></Link>
    

  
          <Link className="no-underline relative top-6 right-30" to="/Aboutus">About-Us</Link>
        
          <Link className="no-underline relative top-6 right-25" to="/Contact">Contact</Link>
        
       
          {/* <Link className="no-underline m-2 p-3" to="/Buyer_registration">login</Link> */}
       
          {/* <Link className="no-underline m-2 p-3" to="/Adminlogin">Admin</Link> */}
       
          <Link className="no-underline  relative top-6 right-20" to="/Buyerlogin">buyer</Link>
          <Link className="no-underline  relative top-6 right-15" to="/SellerLogin">seller</Link>
         </div>
              </nav>

           </>
          )
            }

export default Abouthead
