import Editor from '@monaco-editor/react';
import { useEffect, useRef, useState } from 'react';
import config from '../config';
import examples from '../config/examples';
import { useRecoilState, useRecoilValue } from 'recoil';
import { singleEditorAtom, languageAtom, Language, editAtom } from '../store/editor';
import Languages from './Languages';
import Compiler from './Compiler';
import { Button } from './Button';
import CompilerOutput from './CompilerOutput';
import axios from "axios";


const EditorBox = () => {

  const editorValues = useRecoilValue(singleEditorAtom)
  const editorRef = useRef(null);
  
  const [isEditEnable,setIsEditEnable] = useRecoilState(editAtom)
  const [languageValue,setLanguageValue] = useRecoilState(languageAtom)
  
  useEffect(()=>{
    
    const language = config.supportedLanguages.find((lang)=> lang.id == editorValues.languageId)
    if(language?.id) setLanguageValue(language)
    setIsEditEnable(editorValues.editable)
    
  },[])


  const submitHandler = async() => {
    // const editor  = await  axios(`http://localhost:3000/api/v1/editor/editor-detail?userId=2`,{withCredentials:true})
    // const editor = await fetch({
    //   url: `http://localhost:3000/api/v1/editor/editor-detail?userId=2`,
    //   method: 'get',
    //   withCredentials:true
    // })

    // console.log(editor)
  }
  
   
    
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

      
      return (
        <>
          <div className=' flex h-full bg-slate-200'>
            <div className='ml-2 mt-1 p-2 rounded shadow shadow-black bg-red-400 h-fit'>
              <Editor
                theme='vs-dark'
                height="93vh"
                width="50vw"
                path={languageValue.name}
                defaultValue={editorValues.codeData ? editorValues.codeData : examples[languageValue.id] || ''}
                defaultLanguage={languageValue.name}
                options={config.options}
                  // readOnly: true, //set when is editable is on
                beforeMount={handleEditorWillMount}
                onMount={handleEditorDidMount}
              />
            </div>
            <div className='flex flex-col'>
              <div className='ml-2 mt-1'>
                <Languages placeholder='Select Language' editEnabled={isEditEnable}/>
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
                  {/* <Button title='Compile' buttonType='button' style='text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 '/> */}
                  <button onClick={submitHandler}> Click me</button>
                  {/* <Button onClick={handleCompile} title='Compile' buttonType='button' style='text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 '/> */}
                </div>
              </div>
            </div>
          </div>
          
          
        </>
      );
    }
export default EditorBox;