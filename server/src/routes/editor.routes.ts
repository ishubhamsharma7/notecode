import express,{ Request, Response } from "express";
import { createOrUpdateEditorDetails, getEditorDetails } from "../controller/editor.controller";
import  auth from "../helper/auth";

const router = express.Router();



router.post('/create',auth,createOrUpdateEditorDetails)

router.get('/editor-detial',auth,getEditorDetails)



export default router;