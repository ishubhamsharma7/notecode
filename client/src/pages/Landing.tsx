
import EditorBox from '../components/Editor';
import Header from '../components/Header'
import ProtectedRoute from '../components/ProtectedRoute';
import Sidebar from '../components/Sidebar'
const Landing = () => {

    return (
      <div>
        <Header />
        <ProtectedRoute>
          <div className="flex flex-row">
            <Sidebar />
            <div className="flex-1">
              <EditorBox/>
            </div>
          </div>
        </ProtectedRoute>
      </div>
    );
  }
  

export default Landing