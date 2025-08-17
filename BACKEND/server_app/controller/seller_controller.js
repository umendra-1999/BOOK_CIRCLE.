
import { response } from "express"
import addseller from "../models/seller.model.js";
import addBook from "../models/Bookdetails.model.js";
import updatedinventory from "../models/Bookinventory.model.js"

                          //seller login code

export const sellerLogin=async(request,response)=>{
    const sellerdata=request.body
    const {sellerId,sellerPass}=sellerdata
 
    try{
 
     const sellerObject = await addseller.findOne({userEmail:sellerId})//select * from buyer where useremail=buyeremail@gmail.com and it will return a object if it is present in inside it 
 
     if (sellerObject!=null)
     {
     if(sellerObject.userPassword===sellerPass){
       return response.json({"message":"Hello "+sellerObject.userName , "status":'Success', "token":sellerObject.userEmail})
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
 



                                      //seller register 

                                                                                    //buyerregister login 
export const sellerRegister=async(request,response)=>{
  try{
      const pic=request.file.filename
      console.log(pic);
      const sellerdata=request.body
      const { userEmail , userName , userPassword , userNo , userType , userCity , userAddress}=sellerdata;
      console.log(sellerdata);

      const sellerdoc=new addseller({
      
          userEmail,
          userName,
          userPassword,
          userNo,
          userType,
          userCity,
          userAddress,
          pic,
         })
         await sellerdoc.save()

         response.status(201).json({"message":"Registration done successfully"})
      
  }
  catch(e){
      console.error("ERROR:",e.message);
      response.status(500).json({error:"server error"})
      
      
  }
}

export const SellerLogin=(request,response)=>{
  response.post("<h1>User loged in</h1>")
}


                                                              //book details
                    
export const bookdetails=async(request,response)=>{
  try{
      const image=request.file.filename
      console.log(image);
      const Bookdata=request.body
      const { BookName , Category , Author , Publisher , userType , Description , Number,SellerEmail}=Bookdata;
      console.log(Bookdata);

      const bookdoc=new addBook({
      
          BookName,
          Category,
          Author ,
          Publisher,
          userType,
          Description,
          Number,
          image,
          SellerEmail
         })
         await bookdoc.save()

         response.status(201).json({"message":"Registration done successfully"})
      
  }
  catch(e){
      console.error("ERROR:",e.message);
      response.status(500).json({error:"server error"})
      
      
  }
}

// export const SellerLogin=(request,response)=>{
//   response.post("<h1>User logged in</h1>")
// }                                                                
                                                                                    



export const allbooks=async(request,response)=>{

  try{ 
      // select * from contact from it will return all the 
      const bookDocs=await addBook.find().sort({date:-1})
      console.log(bookDocs);
      
      response.json({"bookdata":bookDocs})

  }
  catch(e){
      console.log(e.message);
      
  }
}

//                                                                      //view books
export const viewBooks=async(request,response)=>{

  const{SellerEmail}=request.query // it return object
  

  try{
      const bookObject=await addBook.find({SellerEmail:SellerEmail})
      return response.status(200).json({bookObject})
  }
  catch(err){
  console.log(err.message);
  
  }
  
  
  }

                           //seller profile view code

  export const sellerProfile=async(request,response)=>{
  
  const{userEmail}=request.query // it return object
  console.log(userEmail);
  
  // const{email}=userEmail
  // console.log(`email is ${email}`); //select * from buyer where email=abc@gmail.com
  
  try{
      const userobject=await addseller.findOne({userEmail:userEmail})
      return response.status(200).json({userobject})
  }
  catch(err){
  console.log(err.message);
  
  }
  
  
  }
  

  //seller edit profile  view code                                                   
     export  const sellereditprofile = async (request,response)=>{
  
        const userobject=request.body
        const{userNo,userCity,userName}= userobject
        const{userEmail}=request.query
        
  
  
        try{
  
  const filtercondition={userEmail:userEmail}
  const modifieddata={$set:{userName,userCity,userNo}}
         const updatedstatus= await addseller.updateOne(filtercondition,modifieddata)  //buyer will update their data by using this syntax
  
         console.log(`updated status is ${updatedstatus}`);
         response.json({"updatestatus":updatedstatus})
         
      
        }
           catch(e){
              console.log(e.message);
              
           }      
        }                                          
  


//updated inventory
        export const updateinventory=async(request,response)=>{
          try{
              
              const bookdata=request.body
              const { SellerEmail , buyerName , buyerEmail , buyerNo,bookId }=bookdata;
              console.log(bookdata);
        
              const bookdoc=new updatedinventory({
              
                  buyerName,
                  SellerEmail,
                  buyerEmail,
                  buyerNo,
                  bookId, 
                  
                 })
                 await bookdoc.save()
                 
         const filtercondition={_id:bookId}
         const modifieddata={$set:{ book_status:"sold"
          
         }}
            const updatedstatus= await addBook.updateOne(filtercondition,modifieddata)  //buyer will update their data by using this syntax
         
             console.log(`updated status is ${updatedstatus}`);

                 
                 response.status(201).json({"message":"updated successfully"})
              
          }
          catch(e){
              console.error("ERROR:",e.message);
              response.status(500).json({error:"server error"})
              
              
          }
        }



        
//  export    const Buyereditprofile = async (request,response)=>{

//   const userobject=request.body
//   const{ book_status}= userobject
//   const{SellerEmail}=request.query
  


//   try{

// const filtercondition={SellerEmail:SellerEmail}
// const modifieddata={$set:{ book_status}}
//    const updatedstatus= await Register.updateOne(filtercondition,modifieddata)  //buyer will update their data by using this syntax

//    console.log(`updated status is ${updatedstatus}`);
//    response.json({"updatestatus":updatedstatus})
   

//   }
//      catch(e){
//         console.log(e.message);
        
//      }      
//   }                                          

        
  
  