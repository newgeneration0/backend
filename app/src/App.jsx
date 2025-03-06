import React from 'react'
// import UserServer from './files/UserServer'
import { RouterProvider } from 'react-router-dom'
import Router from './router/Router'
import AutheProvider from './context/AutheProvider'
// import AutheProvider from './context/AutheProvider'
// import SignUp from './pages/SignUp'
// import Login from './pages/Login'
// import First from './files/First'


function App() {

  return (
    <div className='w-screen h-screen'>
    <AutheProvider>
      <RouterProvider router={Router} />
    </AutheProvider>
    </div>
  )
}

export default App