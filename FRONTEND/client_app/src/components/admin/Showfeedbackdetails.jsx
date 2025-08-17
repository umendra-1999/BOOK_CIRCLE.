import React from 'react'



const Showfeedbackdetails = ({feedbackArray}) => {
  return (
    <>
    
     <h1>feedback listing</h1> 
     <table >
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Remark</th>
            
            </tr>
        </thead>
        <tbody>
            {
                feedbackArray.map((item)=>{
                  return(<tr key={item._id}><td>{item.userName}</td>
                  <td>{item.userEmail}</td>
                  <td>{item.userRemark}</td>
    
                  </tr>)
                })
            }
        </tbody>
     </table>
    
    </>
  )
}

export default Showfeedbackdetails
