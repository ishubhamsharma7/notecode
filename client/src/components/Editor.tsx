import Editor from '@monaco-editor/react';
import { useRef, useState } from 'react';
import config from '../config';
import examples from '../config/examples';
import { useRecoilValue } from 'recoil';
import { languageAtom } from '../store/editor';
import Languages from './Languages';


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
        <div className='bg-red-300 flex h-full'>
          <Editor
           theme='vs-dark'
           height="90vh"
           width="50vw"
           path={languageValue.name}
           defaultValue={examples[languageValue.id] || ''}
           defaultLanguage={languageValue.name}
           options={config.options}
            // readOnly: true, //set when is editable is on
           beforeMount={handleEditorWillMount}
           onMount={handleEditorDidMount}
          />
        <Languages/>
        </div>
      );
    }
export default EditorBox;