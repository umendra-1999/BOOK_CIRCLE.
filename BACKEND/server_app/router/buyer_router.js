import express from 'express'
import {addFeedback} from '../controller/buyer_controller.js'
import { image_upload } from '../middleware/doc_upload_middleware.js'
import { buyerRegister} from '../controller/buyer_controller.js'
import { buyerLogin } from '../controller/buyer_controller.js'
import {buyerProfile} from "../controller/buyer_controller.js"
import {Buyereditprofile} from '../controller/buyer_controller.js'
import { showbookdata } from '../controller/buyer_controller.js'



const buyerRoute = express.Router()

buyerRoute.post("/addFeedback",addFeedback)
buyerRoute.post('/buyerRegister' , image_upload,buyerRegister)
buyerRoute.post("/Buyerlogin",buyerLogin)
buyerRoute.get("/buyerProfile",buyerProfile)
buyerRoute.get("/showbookdata",showbookdata)
buyerRoute.put("/Buyereditprofile",Buyereditprofile)


export default buyerRoute
