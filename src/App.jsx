import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LogInPage from './Pages/LogInPage'
import RegisterPage from './Pages/RegisterPage'
import ForgetPasswordPage from './Pages/ForgetPasswordPage'
import LayoutOne from './Layouts/LayoutOne'
import HomePage from './Pages/HomePage'

function App() {
  const myRoute = createBrowserRouter (
    createRoutesFromElements(
      <Route>
         <Route path='/login'   element={<LogInPage/>} />  
         <Route path='/register' element={<RegisterPage/>} />  
         <Route path='/forgot' element={<ForgetPasswordPage/>} /> 
         <Route path='/' element={<LayoutOne/>}>
            <Route index element={<HomePage/>} />
         </Route>

      </Route>
    )
  )

  return (
   <>
    <RouterProvider router={myRoute} />
   </>
  )
}

export default App
