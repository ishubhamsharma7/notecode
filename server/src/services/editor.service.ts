import {date, z } from 'zod'
import { editorSaveSchema } from '../helper/zodHelper';
import prisma from '../helper/prismaClient';


export async function updateEditorData(editorDetails: z.infer< typeof editorSaveSchema>){
    await prisma.editor.update({
      where:{
         editorId : editorDetails.editorId
      },
      data:editorDetails
   })

   return { message: "Editor updated"}

}