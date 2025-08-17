import React from 'react'
import Header from '../common/Header'
import { Link } from 'react-router-dom'
// import Allcontacts from '../admin/Allcontacts'
// import Feedback from '../buyer/Feedback'

const Adminhome = () => {
  return (
    <>
      <Header/>
       <div className=" bg-no-repeat  h-screen bg-cover bg-[url(https://img.jakpost.net/c/2016/06/14/2016_06_14_6452_1465897206._large.jpg)]">



     <div className='border border-solid border-black h-56 flex flex-col p-12 relative right-6 top-45 m-9 bg-blue-800 rounded-4xl shadow-2xl w-xl'>
      <Link to="/Allcontacts"><button className='border border-solid border-black p-2 m-4 hover:bg-blue-900'>Show me all contacts</button></Link>
     <Link to="/Feedbackdetails"> <button className='border border-solid border-black p-2 m-4  hover:bg-blue-900'>Show me all feedbacks</button></Link>
     </div>
     <div>
       {/* <Allcontacts/> */}
       {/* <Feedback/> */}
     </div>
     </div>
    </>
  )
}

export default Adminhome
