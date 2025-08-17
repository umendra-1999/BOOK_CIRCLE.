import contact from "../models/contact.model.js"

export const addContact=async(request,response)=>{
    // data reciving from front end and react contact.jsx
   const contactObject= request.body
   console.log(contactObject);
   

   //obj destructring
  const {userName,userEmail,userQuery}=contactObject
  
  try{
  const contactDoc=new contact({userName,userEmail,userQuery})
     await contactDoc.save()// the save keyword is use to insert the elemensts in the contact model
    // response.send(" added succesfully")
    response.status(201).json({"message":"Thank you contacting us"})
  }
  catch(e){
    console.log(e.message);
    
  }
 
   
}




// feedback details for common page
import feedback from "../models/feedback.model.js";

export const allfeedback=async(request,response)=>{

  try{ 
      // select * from contact from it will return all the 
      const feedbackDocs=await feedback.find().sort({date:-1}).limit(3)
      console.log(feedbackDocs);
      
      response.json({"feedbackQuery":feedbackDocs})

  }
  catch(e){
      console.log(e.message);
      
  }
}


