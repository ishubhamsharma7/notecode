import Editor from '@monaco-editor/react';
import {  useRef } from 'react';
import config from '../config';
import examples from '../config/examples';
import { useRecoilState } from 'recoil';
import { singleEditorAtom, languageAtom, editAtom } from '../store/editor';
import Languages from './Languages';
import Compiler from './Compiler';
import { Button } from './Button';
import CompilerOutput from './CompilerOutput';

interface EditorId{
  editorId:string
}

const EditorBox = ({editorId}:EditorId) => {

  const [editor,setEditor] = useRecoilState(singleEditorAtom(editorId))

  // console.log("--->",editorValues)
  const editorRef = useRef(null);
  
  const [isEditEnable,setIsEditEnable] = useRecoilState(editAtom)
  const [languageValue,setLanguageValue] = useRecoilState(languageAtom)
  
   
    
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
                defaultValue={ examples[languageValue.id] || ''}
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
                  {/* <Button onClick={handleCompile} title='Compile' buttonType='button' style='text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 '/> */}
                </div>
              </div>
            </div>
          </div>
          
          
        </>
      );
    }
export default EditorBox;