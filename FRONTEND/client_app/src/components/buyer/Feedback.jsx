
import Header from "../common/Header"
import Footer from "../common/Footer"
import { useState } from "react"
import axios from "axios"
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';



const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};
function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}


const Feedback = () => {

  const URL="http://localhost:2302/buyer/addFeedback"

  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);

 const [feedbackdata,setFeedbackdata]=useState({
    userName:"",
    userEmail:"",
    userRemark:"",
    userRating:"",
    })

  const fetchdetail=(e)=>{
    setFeedbackdata({...feedbackdata,[e.target.name]:e.target.value})
    //console.log(feedbackdata)
  }


  const submitdetails=async(e)=>{
    e.preventDefault()
    console.log(feedbackdata);
    try{
      const serverresponse=await axios.post(URL,feedbackdata)
      console.log(serverresponse)

      const msgs=serverresponse.data.message
      alert(msgs)
    }
    catch(e){
      console.log(e.message);
      
    }
    
  }
  return (

    <>
    <Header/>
    <div className=" bg-no-repeat  h-screen bg-cover bg-[url(https://img.jakpost.net/c/2016/06/14/2016_06_14_6452_1465897206._large.jpg)]">

    
    <form className="border border-solid  w-3xl h-96 bg-white rounded-4xl opacity-80 relative left-76 top-40" onSubmit={submitdetails}>
     <div className=" flex flex-col   w-100 relative left-44 top-4">
      <label className="relative left-2">Name:</label>
      <input className="border-black border p-3 m-2 w-96" type="text" name="userName" placeholder="enter the name" value={feedbackdata.userName}  onChange={fetchdetail}/>
      <label className="relative left-2">Email:</label>
      <input className="border-black border p-3 m-2 w-96" type="text" name="userEmail" placeholder="enter the id " value={feedbackdata.userEmail} onChange={fetchdetail}/>
      <label className="relative left-2 ">Remark:</label>      
      <input className="border-black border p-3 m-2 w-96" type="text" name="userRemark" placeholder="Remark" value={feedbackdata.userRemark} onChange={fetchdetail} />
      <div className="relative left-24 flex"> Rating:
       <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
      <Rating
        name="userRating"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(e, newValue) => {
          setFeedbackdata({...feedbackdata,[e.target.name]:labels[hover !== -1 ? hover : value]})
          fetchdetail(e)
          setValue(newValue);
        }}
        onChangeActive={(e, newHover) => {
          fetchdetail(e)
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
    </div>
      </div>  
      <button className="border border-black w-25 relative left-78 top-8 ">submit</button>  
    </form>
    </div>
    <Footer/>
    </>
  )
}

export default Feedback
