import { response } from "express";
import contact from "../models/contact.model.js";
import Admin from "../models/admin.model.js";
import feedback from "../models/feedback.model.js"


                                                   // contact listing code..>

export const allContacts=async(request,response)=>{

    try{ 
        // select * from contact from it will return all the 
        const contactDocs=await contact.find()
        console.log(contactDocs);
        
        response.json({"contactQuery":contactDocs})

    }
    catch(e){
        console.log(e.message);
        
    }
}


                                                       //feedback listing code
export const allfeedback=async(request,response)=>{

  try{ 
      // select * from contact from it will return all the 
      const feedbackDocs=await feedback.find()
      console.log(feedbackDocs);
      
      response.json({"feedbackQuery":feedbackDocs})

  }
  catch(e){
      console.log(e.message);
      
  }
}




                                        //admin login code

                           export const Adminlogin=async(request,response)=>{
                              const admindata=request.body
                               const {adminId,adminPass}=admindata
                                      
                               try{
                                       
                             const adminObject = await Admin.findOne({adminId:adminId})//select * from buyer where useremail=buyeremail@gmail.com and it will return a object if it is present in inside it 
                                        
                               if (adminObject!=null)
                                  {
                                if(adminObject.adminPass===adminPass){
                                  return response.json({"message":"Hello "+adminObject.adminId, "status":'Success', "token":adminObject.adminId})
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
                                         