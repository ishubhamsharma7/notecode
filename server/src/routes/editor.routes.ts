import express,{ Request, Response } from "express";
import { compileCode, createOrUpdateEditorDetails, getEditorDetails, getSingleEditorDetail, updateSharedDetails } from "../controller/editor.controller";
import  auth from "../helper/auth";

const router = express.Router();



router.post('/save',auth,createOrUpdateEditorDetails)
router.post('/update/:id',auth,createOrUpdateEditorDetails)

router.get('/editor-detail',auth,getEditorDetails)

router.get('/editor/:id',auth,getSingleEditorDetail)

router.post('/share/:id',auth,updateSharedDetails)

router.post('/compile',auth,compileCode)



export default router;