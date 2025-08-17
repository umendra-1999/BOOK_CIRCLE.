import { response } from "express";
import found from "."

export const getBooks=async(request,response)=>{
    let response
    try{
        const{Category,Author,BookName}=request.body;
        let authordata=await found.find({Author:{$regex:Author,$options:"i"}})
        let Categorydata=await found.find({Category:{$regex:Category,$options:"i"}})
        let bookdata=await found.find({BookName:{$regex:BookName,$options:"i"}})

        response.json({"adata":authordata,"cdata":Categorydata,"bdata":bookdata})
    }
    catch(error){
        console.log(error.message);
        
    }
}
