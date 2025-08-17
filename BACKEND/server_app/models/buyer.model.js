import mongoose from "mongoose";


const Registerschema= new mongoose.Schema({
    userEmail:{type:String,required:true},
    userPassword:{type:String,required:true},
    userName:{type:String,required:true},
    userNo:{type:String,required:true},
    userType:{type:String,required:true},
    userCity:{type:String,required:true},
    userAddress:{type:String,required:true},
    pic:{type:String,required:true},
    date:{type:String,default:new Date().toISOString().split('T')[0]}

})

const Register=mongoose.model("Register",Registerschema)
export default Register