import React from 'react'
import { Link } from 'react-router-dom'
import SellerHeader from './SellerHeader'
import SellerProfile from './SellerProfile'

const SellerHome = () => {
  return (
    <>
  {/* <SellerHeader/> */}
     {/* <h1 className='text-9xl'>this is seller home page</h1>  */}
     <SellerProfile/>
    <Link to="/SellerProfile"> <button>View Profile</button></Link>
     {/* <Link to="/Bookdetails"className='border-2 m-3'><button>click here to add the book details</button></Link>
    <Link to="/Addedbooks"className='border w-50 m-4 flex'><button>View added books</button></Link> */}
     
    </>
  )
}

export default SellerHome
