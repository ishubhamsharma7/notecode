import { Request, Response } from "express";
import prisma from "../helper/prismaClient";
import { editorSaveSchema } from "../helper/zodHelper";
import { supportedLanguages } from "../helper/constants";
import { updateEditorData } from "../services/editor.service";


export async function createOrUpdateEditorDetails (req:Request,res:Response){
        
    let editorDetails = req.body
    let parsedEditorDetails = editorSaveSchema.safeParse(editorDetails)
    
    if(!parsedEditorDetails.success) return res.status(411).json({message:"Invalid editor data"})

    const isLanguageExists = supportedLanguages.find((lang)=> lang.id == editorDetails.languageId)

    if(!isLanguageExists?.id) return res.status(411).json({message:"Invalid language id"})

    const editorExists = await prisma.editor.findFirst({
        where: {
            editorId: parsedEditorDetails.data.editorId
        }
    })

    if(editorExists) { 
       const editor = await updateEditorData(editorDetails)

       return res.status(201).json(editor)
    }

    await prisma.editor.create({ data:editorDetails })

    res.status(201).json({
        message:"Editor details saved"
    })
}

export async function getEditorDetails(req:Request,res:Response){

    const userId = req.user?.id

    const editorData = await prisma.editor.findFirst({
        where: {
            userId
        }
    })

    if(!editorData) return res.status(404).json({message:"No data found"})

    return res.status(200).json(editorData)


}