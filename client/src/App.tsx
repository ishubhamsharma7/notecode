
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import EditorBox  from './components/Editor'
import Landing from './Landing'

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element : <Landing />,
      children:[
        {
          path: "/editor",
          element: <EditorBox/>,
        },
      ]
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>

  )
}

export default App
