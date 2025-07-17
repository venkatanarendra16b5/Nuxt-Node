import express from "express";
import authroutes  from "./auth.routes";
let routes:any = express.Router()
routes.use('/',authroutes)
// routes.use()

export default routes