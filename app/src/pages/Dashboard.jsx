import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AutheProvider'

function Dashboard() {
    const navigate = useNavigate()
    const { auth, setAuth, role, setRole} =useContext(AuthContext)
    // const handleLogout = () =>{
    //   localStorage.removeItem("token");
    //     localStorage.removeItem('role');
    //     // localStorage.setItem('auth', 0)
    //     setRole('null'); 
    //     setAuth(false)
    //     navigate('/login')
    // }
  return (
    <div>Dashboard
    {/* <button className='cursor-pointer' onClick={handleLogout}>Logout</button> */}
    </div>
  )
}

export default Dashboard