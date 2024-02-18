
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Navigate to={'/signin'}/> ,
    },
    {
      path:'/signin',
      element: <Signin/>,
    },
    {
      path:'/signup',
      element: <Signup/>
    },
    {
      path:'/editor',
      element : <Landing />,
      
    }
  ])
function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>

  )
}

export default App
