
import { useParams, useSearchParams } from 'react-router-dom';
import EditorBox from '../components/Editor';
import Header from '../components/Header'
import ProtectedRoute from '../components/ProtectedRoute';
import Sidebar from '../components/Sidebar'
import EditorWelcome from '../components/EditorWelcome';
const Landing = () => {

  const [editorId]  = useSearchParams()
  let id = editorId.get('id')

    return (
      <div>
        <Header />
        <ProtectedRoute>
          <div className="flex flex-row">
            <Sidebar />
            <div className="flex-1">
              {id ? <EditorBox editorId={id}/> : <EditorWelcome/>}
            </div>
          </div>
        </ProtectedRoute>
      </div>
    );
  }
  

export default Landing