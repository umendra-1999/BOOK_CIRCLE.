import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <>
  

 
   <nav>
    
    <div className='flex justify-center bg-cyan-200 '>
    <Link className='relative right-90' to="/"><img className='rounded-full relative right-44 w-18 h-18 ' src="images\logo.png" alt="" /></Link>
    

  
          <Link className="no-underline m-2 p-3" to="/Aboutus">About-Us</Link>
        
          <Link className="no-underline m-2 p-3" to="/Contact">Contact</Link>
        
       
          {/* <Link className="no-underline m-2 p-3" to="/Buyer_registration">login</Link> */}
       
          {/* <Link className="no-underline m-2 p-3" to="/Adminlogin">Admin</Link> */}
       
          <Link className="no-underline m-2 p-3" to="/Buyerlogin">buyer</Link>
          <Link className="no-underline m-2 p-3" to="/SellerLogin">seller</Link>
          {/* <Link className="no-underline m-2 p-3" to="/SellerRegister">sellerregister</Link> */}


          {/* <select >
          <dropdown value="">Login</dropdown>
          <dropdown className='drop' value="Buyer">Buyer</dropdown>
          <dropdown value="Seller" >Seller</dropdown>
        </select> */}

    
        {/* <select >
           <dropdown to="register">Register</dropdown>
          <dropdown value="Buyer">Buyer</dropdown>
          <dropdown value="Seller" >Seller</dropdown>
        </select> */}

         </div>
              </nav>

           </>
          )
            }

export default Header
