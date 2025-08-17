import express from 'express'
import commonRoute from './router/common_router.js'
import dbconnect from './database/dbConnection.js'
import buyerRoute from './router/buyer_router.js'
import sellerRoute from './router/seller_router.js'
import cors from 'cors'
import adminRoute from './router/admin_router.js'
const serverApp=express()

const PORT_NUMBER=2302

//database connection code here
dbconnect()
serverApp.use(express.json()) // middle ware
serverApp.use(cors())// always call cors before the the route call and also it accept the frontend request
serverApp.use(express.static("public")) //to tell the server that all docs will be uploaded in this folder and sub folder

serverApp.use("/",commonRoute)
serverApp.use("/buyer",buyerRoute)
serverApp.use("/seller",sellerRoute)
serverApp.use("/admin",adminRoute)


serverApp.listen(PORT_NUMBER,()=>{
    console.log(`server is listening on http://localhost:${PORT_NUMBER}`);
    
})