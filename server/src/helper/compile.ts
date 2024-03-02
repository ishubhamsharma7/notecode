import { compileSchema } from "./zodHelper";
import {z} from 'zod'
import axios from 'axios'

export async function createCodeSubmission({code,languageId}:z.infer< typeof compileSchema>){

   const compileData = {
      language_id : languageId,
      source_code: btoa(code)
   }
   
   const options = {
      method: "POST",
      url: process.env.RAPID_API_URL + 'submissions',
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
        "X-RapidAPI-Host": process.env.RAPID_API_HOST,
        "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      },
      data: compileData,
   };

   return axios.request(options)
          .then(async function (response) {
            console.log("res.data", response.data);
            const token = response.data.token;
            return checkStatus(token);
          })
          .catch((err) => {
            let error = err.response ? err.response.data : err;
    
            let status = err.response.status;
            if (status === 429) {
              return {message:"too many requests",status}
   
            }
            // setProcessing(false);
            return {message:error,status}
          });


}

const checkStatus = async (token: any) => {
   const options = {
       method: "GET",
       url: process.env.RAPID_API_URL + "submissions/" + token,
       params: { base64_encoded: "true", fields: "*" },
       headers: {
           "X-RapidAPI-Host": process.env.RAPID_API_HOST,
           "X-RapidAPI-Key": process.env.RAPID_API_KEY,
       },
   };
   try {
       const response = await axios.request(options);
       const statusId = response.data.status?.id;

       return new Promise((resolve, reject) => {
           if (statusId === 1 || statusId === 2) {
               // still processing
               setTimeout(async () => {
                   const result = await checkStatus(token);
                   resolve(result);
               }, 2000);
           } else {
               resolve(response.data);
           }
       });
   } catch (err) {
       console.log("err", err);
       // Handle error here
       return Promise.reject(err);
   }
};
