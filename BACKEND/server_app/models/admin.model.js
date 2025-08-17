import mongoose from "mongoose";

const AdminSchema= new mongoose.Schema({
    adminPass:{type:String,required:true,unique:true},// like in dbms here we create a structure of a table by entring the type of datatype and type of value it hold
    adminId:{type:String,required:true},
    date:{type:String,default:new Date().toISOString().split('T')[0]}

    

})  // it will create a schema in form of object 

const Admin=mongoose.model("admin",AdminSchema) // here contact is the name of schema an another is a component
export default Admin