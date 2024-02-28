import axios from "axios"

export const updateSharelink = async (editorData:any) => {

   const shareEvent = await axios.post(`http://localhost:3000/api/v1/editor/share/${editorData.editorId}`,{
      data: editorData
   },{withCredentials:true})

   return shareEvent.data
}