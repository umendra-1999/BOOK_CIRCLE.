import mongoose from "mongoose";

const feedbackschema= new mongoose.Schema({
    userName:{type:String,required:true},
    userEmail:{type:String,required:true},
    userRemark:{type:String,required:true},
    date:{type:String,default:new Date().toISOString().split('T')[0]}

})

const feedback=mongoose.model("feedback",feedbackschema)
export default feedback