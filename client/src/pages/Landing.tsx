
import EditorBox from '../components/Editor';
import Header from '../components/Header'
import ProtectedRoute from '../components/ProtectedRoute';
import Sidebar from '../components/Sidebar'
const Landing = () => {

    return (
      <div>
        <Header />
        <ProtectedRoute>
          <div className="flex flex-row"> {/* This will hold the sidebar and outlet side by side */}
            <Sidebar />
            <div className="flex-1"> {/* This will allow the outlet to fill the remaining space */}
              <EditorBox/>
            </div>
          </div>
        </ProtectedRoute>
      </div>
    );
  }
  

export default Landing