import React from 'react'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Carousel from './components/common/Carousel'
import './index.css'
import Feedbackdetail from './components/common/Feedbackdetail'
import Landing from "./components/common/Landing"




const App = () => {
  return (
    <>
    <div className='overflow-hidden'>
    <div className=''>  

      <Header/>

      
   <div className='p-2'>

   </div>
    <Carousel/>
    <Landing/>
    </div>
    <Feedbackdetail/>
    <Footer/>
    </div>
    </>
  )
}

export default App
