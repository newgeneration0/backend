import React, { useContext, useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AutheProvider'
import Navbar from './Navbar';

function PrivatesRoutes({allowedRole}) {
  console.log(allowedRole)
    const{auth, setAuth, role, setRole} = useContext(AuthContext);
    const navigate = useNavigate()
    // console.log(role)
    // console.log(auth)

    useEffect(()=>{
        if(!auth){
         navigate('/login')
        }

        if (!allowedRole.includes(role)){
          navigate('/')
        }
    }, [])
  return (
    <div className='w-full h-full'>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default PrivatesRoutes