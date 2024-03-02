import { useSearchParams } from 'react-router-dom';

import EditorBox from '../components/Editor'
import EditorWelcome from '../components/EditorWelcome'

const EditorLandingPage = () => {


   const [editorId]  = useSearchParams()
   let id = editorId.get('id')

   // add logic here to check if route has share id then route it to the page or show error
  //  const {} = useQuery({
  //     queryKey:['']
  //  })

  return (
    <div>
      
      {id ? <EditorBox editorId={id}/> : <EditorWelcome/>}

    </div>
  )
}

export default EditorLandingPage