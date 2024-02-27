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

      // console.log(process.env.REACT_APP_RAPID_API_URL + 'submissions')
    
      // const handleCompile = () => {
      //   const formData = {
      //     language_id: languageValue.id,
      //     // encode source code in base64
      //     //@ts-ignore
      //     source_code: btoa(editorRef.current?.getValue()),
      //   };
      //   const options = {
      //     method: "POST",
      //     url: process.env.REACT_APP_RAPID_API_URL + 'submissions',
      //     params: { base64_encoded: "true", fields: "*" },
      //     headers: {
      //       "content-type": "application/json",
      //       "Content-Type": "application/json",
      //       "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
      //       "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      //     },
      //     data: formData,
      //   };
    
      //   axios
      //     .request(options)
      //     .then(function (response) {
      //       console.log("res.data", response.data);
      //       const token = response.data.token;
      //       checkStatus(token);
      //     })
      //     .catch((err) => {
      //       let error = err.response ? err.response.data : err;
      //       // get error status
      //       let status = err.response.status;
      //       console.log("status", status);
      //       if (status === 429) {
      //         console.log("too many requests", status);
    
      //         // showErrorToast( `Quota of requests exceeded for the Day!`);
      //       }
      //       // setProcessing(false);
      //       console.log("catch block...", error);
      //     });
      // };

      // const checkStatus = async (token:any) => {
      //   const options = {
      //     method: "GET",
      //     url: process.env.REACT_APP_RAPID_API_URL + "submissions/" + token,
      //     params: { base64_encoded: "true", fields: "*" },
      //     headers: {
      //       "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
      //       "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      //     },
      //   };
      //   try {
      //     let response = await axios.request(options);
      //     let statusId = response.data.status?.id;
    
      //     // Processed - we have a result
      //     if (statusId === 1 || statusId === 2) {
      //       // still processing
      //       setTimeout(() => {
      //         checkStatus(token);
      //       }, 2000);
      //       return;
      //     } else {
      //       // setProcessing(false);
      //       // setOutputDetails(response.data);
      //       // showSuccessToast(`Compiled Successfully!`);
      //       console.log("response.data", response.data);
      //       console.log("===>",atob(response.data.stdout))
      //       return;
      //     }
      //   } catch (err) {
      //     console.log("err", err);
      //     // setProcessing(false);
      //     // showErrorToast();
      //   }
      // };