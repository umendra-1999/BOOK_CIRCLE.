import multer from "multer";
import path from 'path'

const storage=multer.diskStorage( // function of multer amd it take object

{
  destination:'./public/profilepics',

  filename:(req,file,cb)=>{
    const uniqueSuffix=Date.now(); // date.now will retuen the current milisecond time to make the image with unique id 
    cb(null, `${file.originalname}_${uniqueSuffix}`); // cb is a call back function and it take three arguments inside it
  }

 }
 )

 const image_upload_book=multer({storage:storage}//in this one storage is built in and second storage is component name 

    ).single("image")


     export {image_upload_book}
    
