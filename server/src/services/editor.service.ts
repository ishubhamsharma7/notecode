import { z } from 'zod'
import { updateSchema } from '../helper/zodHelper';
import prisma from '../helper/prismaClient';


export async function updateEditorData(editorDetails: z.infer< typeof updateSchema>){
    await prisma.editor.update({
      where:{
         editorId : editorDetails.editorId
      },
      data:editorDetails
   })

   return { message: "Editor updated"}

}