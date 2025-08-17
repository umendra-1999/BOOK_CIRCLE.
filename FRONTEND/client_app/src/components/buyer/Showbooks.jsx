import React from 'react'

const Showbooks = ({booksArray}) => {
  return (
    <>
            {
                booksArray.map((item)=>{
                  
                  return(
                    <div className=' card_box  flex w-xl h-70 bg-gray-300 shadow-2xl rounded-2xl' key={item._id}>
                  <img className='rounded-2xl h-60 ' src={`http://localhost:2302/profilepics/${item.image}`} />
                    <h1 className="p-2 m-4"> BOOKNAME: {item.BookName}</h1>
                  <h1 className='p-2 m-4' >AUTHOR: {item.Author}</h1>
                  <h1 className='p-2 m-4' >CATEGORY: {item.Category}</h1>
                  <h1 className='p-2 m-4 relative top-34 right-96 ' >Status: {item.book_status}</h1>

                  <button className='relative right-60 top-40 border-4 h-13 rounded-2xl '>
                    <a href={`https://wa.me/+91${item.Number}?text=hello`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='bg-green-400 p-3 rounded-2xl'>contact</a>
                  </button>
                  
                  </div>
                  )
                })
            }
    </>
  )
}

export default Showbooks
