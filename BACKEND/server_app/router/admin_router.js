import express from 'express'
// import adminLogin from '../controller/admin_controller.js'
import { allContacts, allfeedback } from '../controller/admin_controller.js'
import { Adminlogin } from '../controller/admin_controller.js'


const adminRoute=express.Router()

// adminRoute.post("/adminLogin",adminLogin)
adminRoute.get("/allContacts",allContacts)
adminRoute.get("/allfeedback",allfeedback)
adminRoute.post("/Adminlogin",Adminlogin)
// adminRoute.post("/Adminlogin",Adminlogin)

export default adminRoute