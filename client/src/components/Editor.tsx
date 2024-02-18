import Editor from '@monaco-editor/react';
import { useRef, useState } from 'react';
import config from '../config';
import examples from '../config/examples';
import { useRecoilValue } from 'recoil';
import { languageAtom } from '../store/editor';
import Languages from './Languages';
import Compiler from './Compiler';


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
              </div>
          </div>
          
          
        </>
      );
    }
export default EditorBox;