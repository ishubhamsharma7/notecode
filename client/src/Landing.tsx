
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { Outlet } from 'react-router-dom'
const Landing = () => {
    return (
      <div>
        <Header />
        <div className="flex flex-row"> {/* This will hold the sidebar and outlet side by side */}
          <Sidebar />
          <div className="flex-1"> {/* This will allow the outlet to fill the remaining space */}
            <Outlet/>
          </div>
        </div>
      </div>
    );
  }
  

export default Landing