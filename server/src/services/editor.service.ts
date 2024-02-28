import { z } from 'zod'
import { updateSchema } from '../helper/zodHelper';
import prisma from '../helper/prismaClient';


export async function updateEditorData(editorDetails: z.infer< typeof updateSchema>){
   return await prisma.editor.update({
      where:{
         editorId : editorDetails.editorId
      },
      data:editorDetails,
      select:{
         editable:true,
         editorId:true,
         userId:true,
         languageId:true
      }
   })

}

export async function updateShareLinkData (editorDetails: z.infer< typeof updateSchema>,userId:number){
   try {
      return await prisma.editor.update({
         where:{
            editorId : editorDetails.editorId,
            userId : userId
         },
         
         data:editorDetails,
         select:{
            editable:true,
            editorId:true,
            userId:true,
            languageId:true
         }
      })
      
   } catch (error) {
     return {
         editorId: null,
         error: "Data not updated" 
      }
   }

}