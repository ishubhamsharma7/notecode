import axios from "axios"

interface Editor {
   id: number,
   editorId: string;
   editable: boolean;
   codeData: string;
   languageId: number;
   userId: number;
   shared?: boolean;
   shareLink?:boolean;
   linkExpired?: boolean
}

export interface Compile {
   code:string,
   languageId:number
}

export const updateSharelink = async (editorData:any) => {

   const shareEvent = await axios.post(`http://localhost:3000/api/v1/editor/share/${editorData.editorId}`,{
      data: editorData
   },{withCredentials:true})

   return shareEvent.data
}

export const saveEditorData = async (editorData:Editor) => {

   const savedEditor = await axios.post(`http://localhost:3000/api/v1/editor/save`,{
      data: editorData
   },{withCredentials:true})

   return savedEditor.data
}

export const getCodeOutput = async ({code,languageId}:Compile) => {

   const compiledOutput = await axios.post(`http://localhost:3000/api/v1/editor/compile`,{
      data: {code,languageId}
   },{withCredentials:true})

   return compiledOutput.data.compilerOutput

}