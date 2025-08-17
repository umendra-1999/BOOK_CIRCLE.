import mongoose from "mongoose";


const updateinventory= new mongoose.Schema({
    buyerName:{type:String,required:true},
    SellerEmail:{type:String,required:true},
    buyerEmail:{type:String,required:true},
    buyerNo:{type:String,required:true},
    bookId:{type:String,required:true},
    book_status:{type:String,default:"Sold"},
    date:{type:String,default:new Date().toISOString().split('T')[0]}

})

const updatedinventory=mongoose.model("updatedinventory",updateinventory)
export default updatedinventory