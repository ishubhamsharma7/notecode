import express from "express";

import { resetPassword, signinUser, signupUser } from "../controller/user.controller";

const router = express.Router();


router.post('/signup',signupUser)
router.post('/signin',signinUser)
router.post('/reset-password',resetPassword)

router.get('/me',async(req,res)=>{
    const filter = req.query.filter || ""

    
    res.json({
       message:"hi"
    })
})


export default router