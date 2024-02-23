import express,{ Request, Response } from "express";
import { saveEditorDetails } from "../controller/editor.controller";
import  auth from "../helper/auth";

const router = express.Router();



router.post('/save',auth,saveEditorDetails)

// router.get('/bulk',async(req,res)=>{
//     const filter = req.query.filter || ""

    
//     res.json({
//        message:"hi"
//     })
// })


export default router;