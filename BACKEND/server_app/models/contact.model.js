import mongoose from "mongoose";
const ContactSchema= new mongoose.Schema({
    userName:{type:String,required:true},// like in dbms here we create a structure of a table by entring the type of datatype and type of value it hold
    userEmail:{type:String,required:true},
    userQuery:{type:String,required:true},
    date:{type:String,default:new Date().toISOString().split('T')[0]}

})  // it will create a schema in form of object 

const contact=mongoose.model("contact",ContactSchema) // here contact is the name of schema an another is a component
export default contact