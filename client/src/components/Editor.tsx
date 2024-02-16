import Editor from '@monaco-editor/react';
import { useRef } from 'react';
import config from '../config';
import examples from '../config/examples';
import { useRecoilValue } from 'recoil';
import { languageAtom } from '../store/editor';


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

      function showValue() {
        //@ts-ignore
        alert(editorRef.current?.getValue())
      }
    
      return (
        <div className='bg-red-300'>
          <Editor
           theme='vs-dark'
           height="90vh"
           width="50vw"
           path={languageValue.name}
           defaultValue={examples[languageValue.id] || ''}
           defaultLanguage={languageValue.name}
           //@ts-ignore
           options={config.options}
           beforeMount={handleEditorWillMount}
          />
        </div>
      );
    }
export default EditorBox