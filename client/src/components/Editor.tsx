import Editor from '@monaco-editor/react';
import {  useEffect, useState } from 'react';
import config from '../config';
import examples from '../config/examples';
import { useRecoilState } from 'recoil';
import { singleEditorAtom, languageAtom, editAtom } from '../store/editor';
import Languages from './Languages';
import Compiler from './Compiler';
import { Button } from './Button';
import CompilerOutput from './CompilerOutput';
// import { userAtom } from '../store/user';
// import { v4 as uuid } from "uuid";
import { useMutation } from '@tanstack/react-query';
import { Compile, getCodeOutput, saveEditorData } from '../api/api';

interface EditorId{
  editorId:string
}
// 233ded
const EditorBox = ({editorId}:EditorId) => {
  const [editorDetails ,setEditorDetails ] = useRecoilState(singleEditorAtom(editorId))
  const [language,setlanguage] = useRecoilState(languageAtom)
  const [isEditEnable,setIsEditEnable] = useRecoilState(editAtom)
  // const [copied,setCopied] = useState("") 
  const [compiledData, setCompiledData] = useState({description:"",output:"",time:"",memory:0})

  let timeId: NodeJS.Timer
  // const userId = useRecoilValue(userAtom)?.id

   useEffect(()=>{
    // if(copied){
    //   timeId = setTimeout(() => {
    //     setCopied('')
    //   }, 2000)
    // }

    
    if(editorDetails?.languageId){
      const selectedLanguage =   config.supportedLanguages.find(language => language.id === editorDetails.languageId)

      if(selectedLanguage) setlanguage(selectedLanguage)
    }

    if(editorDetails?.editable) setIsEditEnable(editorDetails.editable)
    
    return () => {
      clearTimeout(timeId as unknown as number)
    }
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

  //ALLOW EDIT CASE PLEASE UNCOMMENT WHEN IN USE

  // if(userId !== editorDetails?.userId && editorDetails?.editable == false){
  //   config.options = {
  //     overviewRulerLanes: 0,
  //     hideCursorInOverviewRuler: true,
  //     scrollbar:{
  //       vertical: "hidden",
  //       horizontal: "hidden"
  //     },
  //     readOnly: true, //set when is editable is on
  //     overviewRulerBorder: false,
  //   }
  // }

  const { mutate:compile,isPending:compilingData } = useMutation({
    mutationFn: getCodeOutput,
    mutationKey: ['compile'],
    onSuccess(data) {
      setCompiledData(data)
    },

  })

  const compileCode = ({code,languageId}:Compile)=>{
    compile({code,languageId})
  } 

 const { mutate,isPending} = useMutation({
    mutationFn: saveEditorData,
    mutationKey:['save'],
  })
  const onSaveHandler = () => {
   mutate(editorDetails!)
  }

  // const { mutate,isPending,isSuccess} = useMutation({
  //   mutationFn: updateSharelink,
  //   mutationKey:['share']
  //   onSuccess:(data)=>{
  //     setCopied("Copied")
  //   }
  // })

  // const shareHandler =  async() => {
  //   const unique_id = uuid();
  //   const small_id = unique_id.slice(0, 8);
  //   const url = `${location.href}&sharedId=${small_id} ` ;
    
  //   const sendData = {...editorDetails,shareLink:url,shared:true}
  //   mutate(sendData)
  //   navigator.clipboard.writeText(url);
  // }

  

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
                  <Compiler output={compiledData.output}/>
                </div>
              </div>

              <div className='my-2 ml-2 h-32'>
                { compiledData?.description && <CompilerOutput description={compiledData.description} time={compiledData.time} memory={compiledData.memory} />}
              </div>

              <div className='flex ml-2'>
                <div>
                  <Button title={isPending ? 'Saving': 'Save' } buttonType='button' style='text-white bg-blue-700 enabled:hover::bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2' 
                    onClick={onSaveHandler}
                    disabled={isPending}
                  />
                </div>
                
                {/* {
                  userId == editorDetails?.userId && 
                  <div> 
                    <Button title={isPending ? 'Generating Link':'Share'} buttonType='button' style='text-white bg-green-700  enabled:hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 disabled:opacity-75 ' 
                            onClick={shareHandler} 
                            disabled={isPending}
                    />
                  </div>
                } */}
                
                <div>
                  {language.compile && 
                    <Button title={compilingData ? 'Compiling and Executing' : 'Compile' } buttonType='button' style='text-white bg-gray-800 enabled:hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 disabled:opacity-75 '
                      onClick={()=>compileCode({code: editorDetails.codeData,languageId:language.id})}
                    />
                  }
                </div>
              </div>
                {/* {
                  isSuccess && <div> {copied} </div> 
                } */}
            </div>
          </div>
          
          
        </>
      );
    }
export default EditorBox;