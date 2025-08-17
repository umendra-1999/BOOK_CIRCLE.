import express from 'express'
import { addContact} from '../controller/common_controller.js'

import {allfeedback} from "../controller/common_controller.js"

const commonRoute = express.Router()
commonRoute.post("/addContact",addContact)
commonRoute.get("/allfeedback",allfeedback)


export default commonRoute