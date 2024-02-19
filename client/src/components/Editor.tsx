import Editor from '@monaco-editor/react';
import { useRef, useState } from 'react';
import config from '../config';
import examples from '../config/examples';
import { useRecoilValue } from 'recoil';
import { languageAtom } from '../store/editor';
import Languages from './Languages';
import Compiler from './Compiler';
import { Button } from './Button';
import CompilerOutput from './CompilerOutput';
import axios from "axios";


const EditorBox = () => {
  
    const editorRef = useRef(null);
  
    const languageValue = useRecoilValue(languageAtom)
    
    function handleEditorWillMount(monaco:any) {
      monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
        target: monaco.languages.typescript.ScriptTarget.Latest,
        module: monaco.languages.typescript.ModuleKind.ES2015,
        allowNonTsExtensions: true,
        lib: ['es2018'],
      });
    }

    function handleEditorDidMount(editor: any) {
      editorRef.current = editor;
    }

      function showValue() {
        //@ts-ignore
        // alert(editorRef.current?.getValue())
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

      
      return (
        <>
          <div className=' flex h-full bg-slate-200'>
            <div className='ml-2 mt-1 p-2 rounded shadow shadow-black bg-red-400 h-fit'>
              <Editor
              theme='vs-dark'
              height="93vh"
              width="50vw"
              path={languageValue.name}
              defaultValue={examples[languageValue.id] || ''}
              defaultLanguage={languageValue.name}
              options={config.options}
                // readOnly: true, //set when is editable is on
              beforeMount={handleEditorWillMount}
              onMount={handleEditorDidMount}
              />
            </div>
            <div className='flex flex-col'>
              <div className='ml-2 mt-1'>
                <Languages placeholder='Select Language' />
              </div>
           
              <div>
                <div className='ml-2 mt-2 font-bold'>
                    Output
                </div>
                <div className='ml-2 mt-2 h-80 w-[102%] bg-black shadow-lg rounded-md' >  
                  <Compiler />
                </div>
              </div>

              <div className='my-2 ml-2 h-40'>
                <CompilerOutput/>
              </div>

              <div className='flex ml-2'>
                <div>
                  <Button title='Save' buttonType='button' style='text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2'/>
                </div>
                <div> 
                  <Button title='Share' buttonType='button' style='text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2'/>
                </div>
                <div>
                  <Button title='Compile' buttonType='button' style='text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 '/>
                  {/* <Button onClick={handleCompile} title='Compile' buttonType='button' style='text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 '/> */}
                </div>
              </div>
            </div>
          </div>
          
          
        </>
      );
    }
export default EditorBox;