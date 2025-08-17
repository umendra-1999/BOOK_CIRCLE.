import  { response } from "express";
import feedback from "../models/feedback.model.js";
import Register from "../models/buyer.model.js";
import addBook from "../models/Bookdetails.model.js"
// import found from "."


                          // EDIT PROFILE FUNCTION
                                                        
   export    const Buyereditprofile = async (request,response)=>{

      const userobject=request.body
      const{userNo,userCity,userAddress}= userobject
      const{userEmail}=request.query
      


      try{

const filtercondition={userEmail:userEmail}
const modifieddata={$set:{userAddress,userCity,userNo}}
       const updatedstatus= await Register.updateOne(filtercondition,modifieddata)  //buyer will update their data by using this syntax

       console.log(`updated status is ${updatedstatus}`);
       response.json({"updatestatus":updatedstatus})
       
    
      }
         catch(e){
            console.log(e.message);
            
         }      
      }                                          






                                               // buyer profile function

export const buyerProfile=async(request,response)=>{

const{userEmail}=request.query // it return object
console.log(userEmail);

// const{email}=userEmail
// console.log(`email is ${email}`); //select * from buyer where email=abc@gmail.com

try{
    const userobject=await Register.findOne({userEmail:userEmail})
    return response.status(200).json({userobject})
}
catch(err){
console.log(err.message);

}


}





                                              //buyerregister login 
export const buyerRegister=async(request,response)=>{
   try{
       const pic=request.file.filename
       console.log(pic);
       const buyerdata=request.body
       const { userEmail , userName , userPassword , userNo , userType , userCity , userAddress}=buyerdata;
       console.log(buyerdata);

       const buyerdoc=new Register({
       
           userEmail,
           userName,
           userPassword,
           userNo,
           userType,
           userCity,
           userAddress,
           pic,
          })
          await buyerdoc.save()

          response.status(201).json({"message":"Registration done successfully"})
       
   }
   catch(e){
       console.error("ERROR:",e.message);
       response.status(500).json({error:"server error"})
       
       
   }
}

export const buyerlogin=(request,response)=>{
   response.post("<h1>User logged in</h1>")
}



                                                                  //buyer login code 
export const buyerLogin=async(request,response)=>{
   const buyerdata=request.body
   const {userEmail,userPassword}=buyerdata

   try{

    const buyerObject = await Register.findOne({userEmail:userEmail})//select * from buyer where useremail=buyeremail@gmail.com and it will return a object if it is present in inside it 

    if (buyerObject!=null)
    {
    if(buyerObject.userPassword===userPassword){
      return response.json({"message":"Hello "+buyerObject.userName , "status":'Success', "token":buyerObject.userEmail})
    }
    else{
      return response.json({"message":"Invalid Password"})
    }
   }
    
   else{

      return response.json({"message":"Email does not exist"})
    }

   }

   
   catch(e){
      console.log(e.message);
      
   }
}



                                                        //addfeedback 
export const addFeedback=async(request, response)=>{
 
     const feedbackobject=request.body
     console.log(feedbackobject);
     

     const { userName,userEmail,userRemark}=feedbackobject

     try{
        const feedbackdoc=new feedback({userName,userEmail,userRemark})
        await feedbackdoc.save()
        //response.send("<h1>all feedbacks are added here</h1>") // it is like conole.log or  use to send the data
        response.status(201).json({"message":"your feedback has been saved"})
     }
     catch(e){
        console.log(e.message);
        
     }


}



                                                       //Book details 
                                                     
export const showbookdata=async(request,response)=>{


   try{ 

      const search = request.query.search

         
          let authordata=await addBook.find({Author:{$regex:search,$options:"i"}})
              let Categorydata=await addBook.find({Category:{$regex:search,$options:"i"}})
              let bookdata=await addBook.find({BookName:{$regex:search,$options:"i"}})
              let contact=await addBook.find({Number:{$regex:search,$options:"i"}})
      
              response.json({"adata":authordata,"cdata":Categorydata,"bdata":bookdata,"ccdata":contact})
          
 
   }
   catch(e){
       console.log(e.message);
       
   }
 }

