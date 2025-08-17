import express from 'express'
import { bookdetails, sellereditprofile, sellerLogin, sellerProfile, updateinventory } from '../controller/seller_controller.js'
import {sellerRegister} from '../controller/seller_controller.js'
import { image_upload } from '../middleware/doc_upload_middleware.js'
import { image_upload_book } from '../middleware/book_upload_middleware.js'
import { allbooks ,viewBooks} from '../controller/seller_controller.js'
// import {booksadded} from '../controller/seller_controller.js'





const sellerRoute=express.Router()


sellerRoute.post("/sellerRegister" , image_upload,sellerRegister)
sellerRoute.post("/Sellerlogin",sellerLogin)
sellerRoute.post("/bookdetails",image_upload_book,bookdetails)
sellerRoute.get("/allbooks",allbooks)
sellerRoute.get("/viewBooks",viewBooks)
sellerRoute.get("/sellerProfile",sellerProfile)
sellerRoute.put("/sellereditProfile",sellereditprofile)
sellerRoute.post("/updateinventory",updateinventory)



export default sellerRoute