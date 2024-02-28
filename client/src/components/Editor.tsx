import Editor from '@monaco-editor/react';
import {  useEffect, useRef, useState } from 'react';
import config from '../config';
import examples from '../config/examples';
import { useRecoilState, useRecoilValue } from 'recoil';
import { singleEditorAtom, languageAtom, editAtom } from '../store/editor';
import Languages from './Languages';
import Compiler from './Compiler';
import { Button } from './Button';
import CompilerOutput from './CompilerOutput';
import { userAtom } from '../store/user';

interface EditorId{
  editorId:string
}
// 233ded
const EditorBox = ({editorId}:EditorId) => {
  const [editorDetails ,setEditorDetails ] = useRecoilState(singleEditorAtom(editorId))
  const [language,setlanguage] = useRecoilState(languageAtom)
  const [isEditEnable,setIsEditEnable] = useRecoilState(editAtom)

  const userId = useRecoilValue(userAtom)?.id
  
   useEffect(()=>{
    if(editorDetails?.languageId){
      const selectedLanguage =   config.supportedLanguages.find(language => language.id === editorDetails.languageId)

      if(selectedLanguage) setlanguage(selectedLanguage)
    }

    if(editorDetails?.editable) setIsEditEnable(editorDetails.editable)

   },[editorDetails])

  const onLanguageChange = (langId:number) => {
    const selectedLanguage =   config.supportedLanguages.find(language => language.id === langId)
    setlanguage(selectedLanguage!)
    setEditorDetails((prev:any)=>{
      return {
        ...prev,
        languageId:langId,
      }
    })
  }

  const handleEditorChange = (value:any) => {
    setEditorDetails((prev:any)=>{
      return {
        ...prev,
        codeData:value,
      }
    })
  };
  

  const toggleHandler = (value:any) => {
    setIsEditEnable(value)
    setEditorDetails((prev:any)=>{
      return {
        ...prev,
        editable: value,
      }
    })
  }

  if(userId !== editorDetails?.userId && editorDetails?.editable == false){
    config.options = {
      overviewRulerLanes: 0,
      hideCursorInOverviewRuler: true,
      scrollbar:{
        vertical: "hidden",
        horizontal: "hidden"
      },
      readOnly: true, //set when is editable is on
      overviewRulerBorder: false,
    }
  }

  const onSaveHandler = () => {
    console.log("======>",editorDetails)
    
  }

  const shareHandler =  async() => {
    // console.log( window.location.href)
    const url = location.href;

    navigator.clipboard.writeText(url);
  }

  if(!editorDetails) {
    return <div>No Results found</div>
  }
  
      return (
        <>
          <div className=' flex h-[calc(100vh-35px)] bg-slate-200'>
            <div className='ml-2 mt-1 p-2 rounded shadow shadow-black bg-red-400 '>
              <Editor
                theme='vs-dark'
                height="93vh"
                width="50vw"
                path={language.name}
                options={config.options}
                value={ editorDetails?.languageId ? editorDetails.codeData : examples[language.id]}
                onChange={handleEditorChange}
                defaultLanguage={language.name}
              />
            </div>
            <div className='flex flex-col  flex-grow'>
              <div className='ml-2 mt-1'>
                <Languages placeholder='Select Language' langId={editorDetails?.languageId} onLanguageChange={onLanguageChange} edit={isEditEnable} onChangeHandler={toggleHandler} editorCreatorId={editorDetails?.userId}/>
              </div>
           
              <div>
                <div className='ml-2 mt-2 font-bold'>
                    Output
                </div>
                <div className='m-2 h-80  bg-black shadow-lg rounded-md' >  
                  <Compiler />
                </div>
              </div>

              <div className='my-2 ml-2 h-40'>
                <CompilerOutput/>
              </div>

              <div className='flex ml-2'>
                <div>
                  <Button title='Save' buttonType='button' style='text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2' onClick={onSaveHandler}/>
                </div>
                {
                  userId == editorDetails?.userId && 
                  <div> 
                    <Button title='Share' buttonType='button' style='text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2' onClick={shareHandler}/>
                  </div>
                }
                <div>
                  {language.compile && <Button title='Compile' buttonType='button' style='text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 '/>}
                  {/* <Button onClick={handleCompile} title='Compile' buttonType='button' style='text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 '/> */}
                </div>
              </div>
            </div>
          </div>
          
          
        </>
      );
    }
export default EditorBox;