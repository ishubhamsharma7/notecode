
import Header from '../components/Header'
import ProtectedRoute from '../components/ProtectedRoute';
import Sidebar from '../components/Sidebar'
import EditorLandingPage from './EditorLandingPage';
const Landing = () => {

    return (
      <div>
        <Header />
        <ProtectedRoute>
          <div className="flex flex-row">
            <Sidebar />
            <div className="flex-1">
              <EditorLandingPage/>
            </div>
          </div>
        </ProtectedRoute>
      </div>
    );
  }
  

export default Landing