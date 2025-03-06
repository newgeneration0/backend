import React, { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AutheProvider'

function UnprotectedRoutes() {
  const {auth} = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(()=> {
    if(auth){
      navigate('/')
    }
  }, [])
  return (
    <div className='w-full h-full'><Outlet /></div>
  )
}

export default UnprotectedRoutes