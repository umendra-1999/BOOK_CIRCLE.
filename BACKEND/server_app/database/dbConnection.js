import mongoose from "mongoose"


const DB_URL=`mongodb+srv://umendra299:umendra1999@clusterumendra.yf5os.mongodb.net/bookcircle_db`

const dbconnect=async()=>{
    try{
  const connection=await mongoose.connect(DB_URL)
  console.log("connection established with database");
  
    }
    catch(error){
        console.log(error.message);
        
    }
}

export default dbconnect