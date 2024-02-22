import express from "express";

import { signinUser, signupUser } from "../controller/user";

const router = express.Router();


router.post('/signup',signupUser)
router.post('/signin',signinUser)

router.get('/me',async(req,res)=>{
    const filter = req.query.filter || ""

    
    res.json({
       message:"hi"
    })
})


export default router