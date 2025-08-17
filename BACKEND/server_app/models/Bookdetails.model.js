import mongoose from "mongoose";


const Bookdetails= new mongoose.Schema({
    BookName:{type:String,required:true},
    SellerEmail:{type:String,required:true},
    Category:{type:String,required:true},
    Author:{type:String,required:true},
    Publisher:{type:String,required:true},
    userType:{type:String,required:true},
    Description:{type:String,required:true},
    Number:{type:String,required:true},
    image:{type:String,required:true},
    book_status:{type:String,default:"available"},
    date:{type:String,default:new Date().toISOString().split('T')[0]}

})

const addBook=mongoose.model("addBook",Bookdetails)
export default addBook