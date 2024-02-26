import express from "express";

import { getUserProfile, resetPassword, signinUser, signupUser } from "../controller/user.controller";
import auth from "../helper/auth";

const router = express.Router();


router.post('/signup',signupUser)
router.post('/signin',signinUser)
router.post('/reset-password',resetPassword)
router.get('/me',auth,getUserProfile)

router.get('/me',async(req,res)=>{
    const filter = req.query.filter || ""

    
    res.json({
       message:"hi"
    })
})


export default router