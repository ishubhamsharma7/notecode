import express from "express";

const router = express.Router();

router.get('/bulk',async(req,res)=>{
    const filter = req.query.filter || ""

    
    res.json({
       message:"hi"
    })
})


export default router;