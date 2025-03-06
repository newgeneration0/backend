import React, { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AutheProvider'

function PrivatesRoutes({allowedRole}) {
  console.log(allowedRole)
    const{auth, setAuth, role, setRole} = useContext(AuthContext);
    const navigate = useNavigate()
    console.log(role)
    console.log(auth)

    useEffect(()=>{
        if(!auth){
         navigate('/login')
        }

        if (!allowedRole.includes(role)){
          navigate('/')
        }
    }, [])
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default PrivatesRoutes