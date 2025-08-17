import React from 'react'



const Contactdetails = ({contactArray}) => {
  return (
    <>
    
     <h1>contact listing</h1> 
     <table >
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Query</th>
            
            </tr>
        </thead>
        <tbody>
            {
                contactArray.map((item)=>{
                  return(<tr key={item._id}><td>{item.userName}</td>
                  <td>{item.userEmail}</td>
                  <td>{item.userQuery}</td>
                  </tr>)
                })
            }
        </tbody>
     </table>
    
    </>
  )
}

export default Contactdetails
