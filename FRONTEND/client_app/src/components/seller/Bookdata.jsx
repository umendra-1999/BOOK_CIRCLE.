import React from 'react'
import styled from 'styled-components';
import Header from "../common/Header"

const Bookdata = ({bookdataArray}) => {
  
  return (
    <>
  <Header/>
    <StyledWrapper>
       <div className=' bg-no-repeat  rounded-4xl bg-cover bg-[url("https://img.freepik.com/premium-photo/world-book-day-painting-stacked-book-style_407818-83.jpg")]'>
      <div className=' flex flex-col overflow-hidden m-6 p-10 gap-52 rounded-3xl '>
            {
                bookdataArray.map((item)=>{
                  
                  return(
                    <div className=' w-220 rounded-2xl flex' key={item._id}>
                      <img className='rounded-2xl' src={`http://localhost:2302/profilepics/${item.image}`} alt="" />
                      <div className='card relative  card__content left-90 '>
                    
                      <div className=' relative w-2xl   '>
                    <h1 className="p-2">Bookname: {item.BookName}</h1>
                  <h1 className='p-2'>Authorname: {item.Author}</h1>
                  <h1 className='p-2'>BookCategory:  {item.Category}</h1>
                  <h1 className='p-2' >Publishername: {item.Publisher}</h1>
                  <h1 className='p-2' >Bookprice:  {item.userType}</h1>
                 
                  <h1 className='p-2'>description: {item.Description}</h1>
                  <h1 className='p-2'>ContactNumber:{item.Number}</h1>
                  </div>
                  
                  
                  </div>
                  </div>
                  )
                })
            }
      </div>
      </div>
      </StyledWrapper>
    </>
  )
}




const StyledWrapper = styled.div`
  .card {
    width: 100%;
    height: 500px;
    border-radius: 20px;
    padding: 2px;
    box-shadow: #111 0 1px 3px 2px;
    // display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    position: relative;
    cursor: pointer;
  }

  .card__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(0deg, #000, #272727);
    color: #fff;
    border-radius: 17px;
    width: 100%;
    height: 100%;
    font-size: 20px;
    font-weight: 900;
  }`;

export default Bookdata
