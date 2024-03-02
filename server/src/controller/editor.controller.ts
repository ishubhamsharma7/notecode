import { Request, Response } from "express";
import prisma from "../helper/prismaClient";
import { compileSchema, editorSaveSchema, updateSchema } from "../helper/zodHelper";
import { supportedLanguages } from "../helper/constants";
import { updateEditorData, updateShareLinkData } from "../services/editor.service";
import { createCodeSubmission } from "../helper/compile";


export async function createOrUpdateEditorDetails (req:Request,res:Response){
    let editorDetails = req.body
    // let 
    // console.log(editorDetails)

    const editorExists = await prisma.editor.findFirst({
        where: {
            editorId: editorDetails.data.editorId
        }
    })

    if(editorExists) { 
        let parsedEditorDetails = updateSchema.safeParse(editorDetails.data)

        if(!parsedEditorDetails.success) return res.status(411).json({message:"Invalid editor data"})
        
        const editor = await updateEditorData(parsedEditorDetails.data)
 
        return res.status(201).json({message:"Editor updated successfully",data:editor})
    }

    let parsedEditorDetails = editorSaveSchema.safeParse(editorDetails)
    
    if(!parsedEditorDetails.success) return res.status(411).json({message:"Invalid editor data"})

    const isLanguageExists = supportedLanguages.find((lang)=> lang.id == editorDetails.languageId)

    if(!isLanguageExists?.id) return res.status(411).json({message:"Invalid language id"})

    editorDetails = {...editorDetails,userId:req.user?.id}

    await prisma.editor.create({ data:editorDetails })

    res.status(201).json({
        message:"Editor details saved"
    })
}

export async function getEditorDetails(req:Request,res:Response){

    const editorId = req.query.id
    
    const editorData = await prisma.editor.findFirst({
        where: {
            editorId :editorId as string
        },
        orderBy:{
            id:'asc'
        }
    })

    if(!editorData) return res.status(404).json({message:"No data found"})

    return res.status(200).json(editorData)


}


export async function getSingleEditorDetail(req:Request,res:Response){

    const editorId = req.params.id

    console.log(editorId)

    const editorData = await prisma.editor.findUnique({
        where:{
            editorId
        }
    })

    if(!editorData) return res.status(404).json({message:"No data found"})

    return res.status(200).json(editorData)
}

export async function updateSharedDetails(req:Request,res:Response){

    const userId = req.user?.id
    const editorDetails = req.body

    let parsedEditorDetails = updateSchema.safeParse(editorDetails.data)

        if(!parsedEditorDetails.success) return res.status(411).json({message:"Invalid editor data"})
        
        const editor = await updateShareLinkData(parsedEditorDetails.data,userId!)

        if (editor?.editorId == null) return res.status(404).json({message:"Editor did not updated"}) 
 
    return res.status(201).json({message:"Editor updated successfully",data:editor})

}


export async function compileCode(req:Request,res:Response){

    const codeData = req.body.data

    let parsedCompileData = compileSchema.safeParse(codeData)

    if(!parsedCompileData.success) return res.status(411).json({message:"Invalid compiling data"})

    let compiledOutput:any = await createCodeSubmission(parsedCompileData.data)

    return res.status(200).json({
        compilerOutput: {
            description: compiledOutput?.status.description,
            output : atob(compiledOutput?.stdout),
            time: compiledOutput.time,
            memory: compiledOutput.memory
        }
    })
    

}