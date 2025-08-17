import React from 'react'
import styled from 'styled-components';


const Showfeedbackdetail = ({feedbackArray}) => {
  // alert(typeof(feedbackArray))
  return (
    <>
    <StyledWrapper>
    <h1 className=' relative text-indigo-600 text-4xl  font-extrabold tracking-tight left-10 top-4 '>Feedback`s</h1>
      <div className=' container flex m-6 p-10 gap-52 relative overflow-hidden right-16  rounded-3xl'>
            {
                feedbackArray.map((item)=>{
                  
                  return(
                    <div className='border card_box border-solid w-70 h-40 bg-gray-500 text-amber-50 rounded-2xl' key={item._id}>
                    <h1 className="p-2">{item.userName}</h1>
                  <h1 className='p-2' >{item.userEmail}</h1>
                  <h1 className='p-2' >{item.userRemark}</h1>
                  
                  </div>
                  )
                })
            }
      </div>
      </StyledWrapper>
    </>
  )
}



const StyledWrapper = styled.div`
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card_box {
    width: 200px;
    height: 250px;
    border-radius: 20px;
    background: linear-gradient(170deg, rgba(58, 56, 56, 0.623) 0%, rgb(31, 31, 31) 100%);
    position: relative;
    box-shadow: 0 25px 50px rgba(0,0,0,0.55);
    cursor: pointer;
    transition: all .3s;
  }

  .card_box:hover {
    transform: scale(0.9);
  }

  .card_box span {
    position: absolute;
    overflow: hidden;
    width: 150px;
    height: 150px;
    top: -10px;
    left: -10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card_box span::before {
    content: 'FEEDBACK'S;
    position: absolute;
    width: 150%;
    height: 40px;
    background-image: linear-gradient(45deg, #ff6547 0%, #ffb144  51%, #ff7053  100%);
    transform: rotate(-45deg) translateY(-20px);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    box-shadow: 0 5px 10px rgba(0,0,0,0.23);
  }

  .card_box span::after {
    content: '';
    position: absolute;
    width: 10px;
    bottom: 0;
    left: 0;
    height: 10px;
    z-index: -1;
    box-shadow: 140px -140px #cc3f47;
    background-image: linear-gradient(45deg, #FF512F 0%, #F09819  51%, #FF512F  100%);
  }`;

export default Showfeedbackdetail
