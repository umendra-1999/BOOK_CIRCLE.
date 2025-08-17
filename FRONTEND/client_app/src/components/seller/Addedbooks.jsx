import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import SellerHeader from './SellerHeader'

const Addedbooks = () => {
    const URL = "http://localhost:2302/seller/viewBooks"
    const [book, setBook] = useState([])
    const navigate = useNavigate()
    const tokenEmail = localStorage.getItem("key")

    useEffect(() => {
        if (!tokenEmail) {
            navigate("/Sellerlogin")
        } else {
            fetchbooks()
        }
    }, [])

   const updateInventory=async(item)=>{

    navigate("/bookInventory",{state:{id:item._id,SellerEmail:item.SellerEmail}})
     
   }

    const fetchbooks = async () => {
        try {
            const params = { SellerEmail: tokenEmail }
            const serverrespon = await axios.get(URL, { params })
            const bk = serverrespon.data.bookObject
            setBook(bk)
            console.log("bk data. ",bk);
            
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <>
        <SellerHeader/>
            
  <div  className="bg-no-repeat image h-screen bg-cover bg-[url('https://img.jakpost.net/c/2016/06/14/2016_06_14_6452_1465897206._large.jpg')]">
                    
    <table  >
            <div className='relative left-26 top-20 '>
     <thead >
      <tr>
        <th className='border-2 w-28'>BookName</th>
         <th className='border-2 w-28'>Author</th>
          <th className='border-2 w-28'>Category</th>
               
         </tr>
        </thead>
        <tbody >
            {
                book.map((item)=>{
                  return(<tr key={item._id}>
                  <td className=' border-2'>{item.BookName}</td>
                  <td className='border-2' > {item.Author}</td>
                  <td className='border-2'> {item.Category}</td>
                  <td className='border-2'> <button onClick={()=>{
 updateInventory(item) }}> updateInventory </button></td>
                  </tr>)
                })
            }
        </tbody>
            </div>
     </table>
       </div>
                            
                          
        </>
    )
}

export default Addedbooks
